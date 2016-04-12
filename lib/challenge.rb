require 'pry'

# Returns true if block returns true for any item in array.
def any? ary, &block
  ary.each do |i|
    if block.call(i)
      return true
    end
  end
  return false
end

def none? ary, &block
  ary.each do |i|
    if block.call(i)
      return false
    end
  end
  return true
end

ary1 = [1,3,5,7]
ary2 = [1,2,3,4]

# Should print false
puts (any? ary1 do |i|
  i % 2 == 0
end)

# Should print true
puts (any? ary2 do |i|
  i % 2 == 0
end)

# Should print true
puts (any? ary1 do |i|
  i > 6
end)

# Should print false
puts (any? ary2 do |i|
  i > 6
end)

# Should print true
puts (none? ary1 do |i|
  i % 2 == 0
end)

# Should print false
puts (none? ary2 do |i|
  i % 2 == 0
end)

# Should print false
puts (none? ary1 do |i|
  i > 6
end)

# Should print true
puts (none? ary2 do |i|
  i > 6
end)


# binding.pry
# ""
