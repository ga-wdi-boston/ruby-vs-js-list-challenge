# Requirements

# Add your function parameters between the parentheses.
def any?(array, &block)
  array.any?(&block)
end

# Add your function parameters between the parentheses.
def none?(array, &block)
  !array.any?(&block)
end

# Bonuses

# Add your function parameters between the parentheses.
def one?()
  # Your function body here.
end

# Add your function parameters between the parentheses.
def all?(array, &block)
  array.all?(&block)
end
