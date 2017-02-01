# Requirements

# Add your function parameters between the parentheses.
def any?(array)
  if array.length.zero?
    return false
  end

  0.upto(array.length - 1) do |i|
    if yield array[i]
      return true
    end
  end
  return false
end

# Add your function parameters between the parentheses.
def none?(array)
  if array.length.zero?
    return true
  end
  0.upto(array.length - 1) do |i|
    if yield array[i]
      return false
    end
  end
  true
end

# Bonuses

# Add your function parameters between the parentheses.
def one?(array)
  if array.length.zero?
    return false
  end
  count = 0
  0.upto(array.length) do |i|
    if yield array[i]
      count += 1
    end
  end
  if count > 1 || count < 1
    return false
  else
    return true
  end
end

# Add your function parameters between the parentheses.
def all?()
  # Your function body here.
end
