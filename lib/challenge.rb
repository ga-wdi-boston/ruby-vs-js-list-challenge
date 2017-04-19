# Requirements

# Add your function parameters between the parentheses.
def any?(array, funct)
  if array.length.zero?
    puts false
  end
  0.upto(array.length-1) do |i|
    if funct(i) == true
      puts true
    end
    false
  end
end

# Add your function parameters between the parentheses.
def none?(array, funct)
  if array.length.zero?
    puts true
  end
  0.upto(array.length-1) do |i|
    if funct(i) == true
      puts false
    end
    true
  end
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
