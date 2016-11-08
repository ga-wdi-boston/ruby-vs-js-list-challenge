# any function incomplete
def any? list, &block
  list.include?{|i| '&block(i)'}
end
