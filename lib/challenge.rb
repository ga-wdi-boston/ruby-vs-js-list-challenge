def any? list, &block
  0.upto(list.length) do |i|
    if block.call(list[i])
      return true
    else
      return false
    end
  end
end
