# Requirements

# Add your function parameters between the parentheses.
# Create an any? (JS: any) function that accepts an array and a block
# (JS: function), and returns true if the block (/function) returns true
# for any item in the array. If the array is empty, the function should return false.
def any?(list, test)
  if !list.length
    return false
  end
  for i in list
    if( test(i)) {
      return true
    }
  end
  return false
end

# Create a method none? (JS none) that accepts an array and a block
# (JS: a function), and returns true if the block (/function)
# returns true for none of the items in the array. An empty list should return true.
def none?(list, listFunc) {
  if !list.length
    return false
  end
  for i in list
    if !test(i)
      next
    else
      return false
    end
}

# Bonuses

# Add your function parameters between the parentheses.
def one?()
  # Your function body here.
end

# Add your function parameters between the parentheses.
def all?()
  # Your function body here.
end
