# Requirements

# Add your function parameters between the parentheses.
def any?(arr)
  arr.each do |i|
    if arr[i] == true
      return true
    elsif arr.length.zero?
      return false
    else
      return false
    end
  end
end

# Add your function parameters between the parentheses.
def none?(arr)
  arr.each do |i|
    if arr[i] == true
      return false
    end
  end
  return false
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
