from sklearn.datasets import load_digits
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import confusion_matrix

digits = load_digits(10)

train_x = digits.data[:1500]
train_y = digits.target[:1500]

test_x = digits.data[1500:]
test_y = digits.target[1500:]

lr = LogisticRegression()
lr.fit(train_x, train_y)

pred = lr.predict(test_x)

cm = confusion_matrix(test_y, pred, labels=digits.target_names)
print(cm)
