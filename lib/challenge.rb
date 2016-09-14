def any? list, &block
  list.each do |item|
    if block.call(item)
      return true;
    end
  end
  return false;
end