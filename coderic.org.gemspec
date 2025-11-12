# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "coderic.github.io"
  spec.version       = "0.0.2"
  spec.authors       = ["Coderic"]
  spec.email         = ["coderic@coderic.org"]

  spec.summary       = "Corporación Orientada al Desarrollo Estratégico de Recursos de Información Comercial"
  spec.homepage      = "https://coderic.org"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1"
end
