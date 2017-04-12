# Requirements

# Add your function parameters between the parentheses.
def any?(ant bear cat)
  %w{ant bear cat}.any? {|word| word.length >= 3}
end

# Add your function parameters between the parentheses.
#Passes each element of the collection to the given block. The method returns true if the block never returns true for all elements. If the block
# is not given, none? will return true only if none of the collection members is true.
def none?(ant bear cat)
%w{ant bear cat}.none? {|word| word.length == 5}
end

# Bonuses

# Add your function parameters between the parentheses.
#Passes each element of the collection to the given block. The method returns true if the block returns true exactly once. If the block is not
# given, one? will return true only if exactly one of the collection members is true.
def one?(ant bear cat)
%w{ant bear cat}.one? {|word| word.length == 4}
end

# Add your function parameters between the parentheses.
def all?()
  # Your function body here.
end
