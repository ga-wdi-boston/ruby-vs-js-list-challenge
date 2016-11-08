def any? list, &block
  for i in list
    val =  yield i if block_given?
    return true if val
  end
  return false
end



def none? list, &block
  for i in list
  val = yield i if block_given?
  return false if val
end
  return true
  end
