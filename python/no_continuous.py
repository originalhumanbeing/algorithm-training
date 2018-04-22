def no_continuous(s):
    new = []
    for i, v in enumerate(s):
        if i == 0:
            new.append(v)
        elif s[i-1] == v:
            continue
        else:
            new.append(v)
    return new

# list comprehension version
# [v for i, v in enumerate(s) if i==0 or s[i-1] != s[i]]

print(no_continuous("133303"))
print(no_continuous("47330"))
print(no_continuous("22233332210"))