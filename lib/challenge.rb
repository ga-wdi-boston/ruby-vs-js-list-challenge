# Requirements
# Add your function parameters between the parentheses.
def any?(array, &func)
  return false if array.empty?
  #array.any?(&func)
  output = false
  array.each do |item|
    output = func.call(item)
    return true if output
  end
  output
  # Your function body here.
end
#do |item|
#    if item
#      true
#    else
#      false
#    end

# Add your function parameters between the parentheses.
def none?(array, &func)
  return true if array.empty?
  array.none?(&func)

  # Your function body here.
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
