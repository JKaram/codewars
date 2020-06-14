# Question 1
# Suppose you are running a split test at your startup and you want to test a new landing page for
# your users (call it Page B, compared to the current one, Page A).
# ● Each user has a user_id, e.g.: 1, 2, 3, 4, 5..., 1001,..
# ● Users who have an odd​ id will be in the experimental group (they will get Page B)
# ● Users who have an even​ id will be in the control group (they will get Page A)
# Write a function `user_in_experiment` that takes a user_id (integer) and returns True​ if the
# the user_id is odd and hence the user is in the experimental group, or returns False ​otherwise.

def user_in_experiment(user_id):
    if type(user_id) is not int or user_id < 0:
        return 'Invalid Input'
    return user_id % 2 == 0

print(user_in_experiment(12)) #True
print(user_in_experiment('Twelve')) #Invalid Input

# Question 2
# At this same startup, which happens to be a restaurant recommendation service, we want to add
# a website feature where users can filter by just the popular restaurants.
# Write a function `get_popular_restaurants` that takes a list of restaurant names and returns
# only the ones that are in the popular list. Here’s the popular list:
# POPULAR_RESTAURANTS = [‘Laut’, ‘Rosa Mexicano’, ‘Ootoya’, ‘Dig Inn’]
 

def get_popular_restaurants(restaurant_list, popular_restaurant_list):
    output = []
    for restaurant in restaurant_list:
        if restaurant in popular_restaurant_list:
            output.append(restaurant)
    return output

popular_restaurants = ['Laut', 'Rosa Mexicano', 'Ootoya', 'Dig Inn']
restaurants = ['McDonalds', 'Ootoya', 'Wendys', 'Laut']
            
print(get_popular_restaurants(restaurants, popular_restaurants)) #['Ootoya', 'Laut']

# Question 3
# At our amazing restaurant recommendation startup, we want to sort restaurants by rating.
# Given the following restaurant data below, write a function that returns a list of restaurants,
# sorted by rating (out of 10), from highest​ to lowest​.
# Restaurant Data:
restaurants = [
{
"name": "Ootoya",
"rating": 8.0
},
{
"name": "Chipotle",
"rating": 6.6
},
{
"name": "Burger & Lobster",
"rating": 7.2
},
{
"name": "Laut",
"rating": 8.1
}
]

def sort_restaurants_by_rating(restaurant_list):
    return sorted(restaurant_list, key=lambda x: x['rating'], reverse=True) 

print(sort_restaurants_by_rating(restaurants))

# Question 4
# Suppose we work at a company where our x^2 - 49 = COST​, and x​ is the number of facilities
# we manage. What value of x​ will make our COST​ equal to zero?

# x^2 - 49 = COST
# x^2 - 49 = 0
# x2−49+49=0+49
# x2=49
# x=√49
# x=7

# ANSWER x = 7

# Question 5
# Suppose we are at that same company and REVENUE = -x^2 + 5x +7​. What value of x
# maximizes revenue?

# REVENUE = -x^2 + 5x +7​
# 7 = -x^2 + 5x +7​
# 7−(−x2+5x+7)=−x2+5x+7−(−x2+5x+7)
# x2−5x=0

# ANSWER x=5


# The max value of a downward facing quadratic such as y = -x^2 + 5x + 7 is found at the vertex.

# x-value of vertex = -b/(2a) = -5/(2 * (-1)) = 5/2 = 2.5

def calc_revenue(range_num):
    max = 0
    what_num = 0
    for num in range(range_num):
        num = num / 10 #convert to decimal
        total = (-num ** 2) + (num * 5) + 7 #Revenue total
        if max < total:
            max = total
            what_num = num
    return what_num

print(calc_revenue(10000))
