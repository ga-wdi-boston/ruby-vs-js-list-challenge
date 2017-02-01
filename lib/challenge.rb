# Requirements

# Add your function parameters between the parentheses.
def any?(ary)
  if ary.length.zero?
    return false
  end

  0.upto(ary.length - 1) do |i|
    if yield ary[i]
      return true
    end
  end

  return false
end

# Add your function parameters between the parentheses.
def none?(ary)
  if ary.length.zero?
    return true
  end

  0.upto(ary.length - 1) do |i|
    if yield ary[i]
      return false
    end
  end

  return true
end

# Bonuses

# Add your function parameters between the parentheses.
def one?()
  # Your function body here.
end

# Add your function parameters between the parentheses.
def all?()
  # Your function body here.
end
