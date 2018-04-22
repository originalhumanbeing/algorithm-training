def alpha_string46(s):
    return s.isdigit() and len(s) == 4 or len(s) == 6

# isdigit() takes no arguments
# isdigit() can be trusted only when arguments are positive number

print( alpha_string46("a234") )
print( alpha_string46("1234") )
print( alpha_string46("1234333333") )