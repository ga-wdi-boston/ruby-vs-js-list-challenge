True for Any?
def block? (array)
  for i in 1..array.length do
    if (array[i] == nil)
      return false
    end
  end
 return true
end

def trueforAny? (array, block?)
    if (block?(array))
      return true
    end
 return false
end


# no time for challenge 2~
