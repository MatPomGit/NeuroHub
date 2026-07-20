# frozen_string_literal: true

require "date"
require "yaml"

module PsyHub
  class WikiPage < Jekyll::PageWithoutAFile
    FRONT_MATTER = /\A---\s*\r?\n(.*?)\r?\n---\s*\r?\n/m

    def initialize(site, source_path)
      output_path = source_path.sub(/\.md\z/i, ".html")
      super(
        site,
        site.source,
        File.dirname(output_path),
        File.basename(output_path)
      )

      raw_content = File.read(site.in_source_dir(source_path), encoding: "UTF-8")
      metadata, body = parse_source(raw_content, source_path)

      self.content = body
      self.data = metadata
      self.data["layout"] ||= "wiki"
      self.data["title"] ||= humanized_title(source_path)
      self.data["description"] ||= first_paragraph(body)
      self.data["source_path"] = source_path
      self.data["permalink"] ||= "/#{output_path}"
    end

    private

    def parse_source(raw_content, source_path)
      match = FRONT_MATTER.match(raw_content)
      return [{}, raw_content] unless match

      metadata = YAML.safe_load(
        match[1],
        permitted_classes: [Date, Time],
        aliases: true
      )
      metadata = {} unless metadata.is_a?(Hash)
      [metadata, raw_content[match.end(0)..] || ""]
    rescue Psych::SyntaxError => error
      Jekyll.logger.warn "PsyHub:", "Nieprawidłowy front matter w #{@path}: #{error.message}"
      [{}, raw_content]
    end

    def humanized_title(source_path)
      title = File.basename(source_path, ".md").tr("_", " ")
      title.sub(/\A[a-z]/, &:upcase)
    end

    def first_paragraph(body)
      body.lines
          .map(&:strip)
          .reject { |line| line.empty? || line.start_with?("#", "<", "|", "-", "*", ">") }
          .first
          .to_s
          .gsub(/\[([^\]]+)\]\([^)]+\)/, "\\1")
          .gsub(/[*_`]/, "")
          .slice(0, 240)
    end
  end

  class WikiPagesGenerator < Jekyll::Generator
    safe true
    priority :low

    def generate(site)
      source_root = site.in_source_dir("wiki")
      return unless Dir.exist?(source_root)

      Dir.glob(File.join(source_root, "**", "*.md")).sort.each do |absolute_path|
        source_path = Pathname.new(absolute_path).relative_path_from(Pathname.new(site.source)).to_s
        site.pages << WikiPage.new(site, source_path)
      end

      Jekyll.logger.info "PsyHub:", "wygenerowano strony HTML dla artykułów wiki"
    end
  end
end
