def any? list, &block
  unless list == 0
  return list.any?(&block)
  end
end
