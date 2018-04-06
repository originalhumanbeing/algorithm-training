def rm_small(mylist):
    if len(mylist) == 0:
        return []
    else:
        smallest = mylist[0]
        for i in mylist:
            if i < smallest:
                smallest = i
                # print('smallest: ', smallest)
        mylist.remove(smallest)
        return mylist
# 다른 사람 풀이: return [i for i in mylist if i > min(mylist)]

my_list = [4, 3, 2, 1]
my_my_list = []
print(rm_small(my_list))
print(rm_small(my_my_list))