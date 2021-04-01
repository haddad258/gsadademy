chat={
    'Q1':{
        'Text':'this is  question one please answer',
        'test2':'Q2',
        'test3':'Q3'},
    'Q2':{
        'Text':'this is  question two please answer',
        'test1':'EXIT',
        'test3':'Q3'},
    'Q3':{
        'Text':'this is  question three please answer',
        'Any':'EXIT'}
}

ConversationOver=False
NextQ='Q1'
while not(ConversationOver):
    print(chat[NextQ]['Text'])
    ans=input().strip()
    try:
        NextQ=chat[NextQ][ans]
    except :
        NextQ=chat[NextQ]['Any']
    if NextQ=='EXIT':
        ConversationOver=True

#print(chat['Q1']['test'])