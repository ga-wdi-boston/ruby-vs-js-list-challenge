def any? list, &block
  list.each do |item|
    if block.call(item)
      return true;
    end
  end
  return false;
end

def none? list, &block
  list.each do |item|
    if block.call(item)
      return false;
    end
  end
  return true;
end