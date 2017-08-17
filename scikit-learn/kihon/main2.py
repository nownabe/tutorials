import numpy as np
from sklearn.datasets import load_digits
from sklearn.pipeline import Pipeline
from sklearn.model_selection import GridSearchCV
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.externals import joblib

digits = load_digits(10)

train_x = digits.data[:1500]
train_y = digits.target[:1500]

test_x = digits.data[1500:]
test_y = digits.target[1500:]

pipeline = Pipeline([
    ("standard_scaler", StandardScaler()),
    ("svm", SVC())
])

params = {
    "svm__C": np.logspace(0, 2, 5),
    "svm__gamma": np.logspace(-3, 0, 5)
}

clf = GridSearchCV(pipeline, params)
clf.fit(train_x, train_y)

pred = clf.predict(test_x)

print(classification_report(test_y, pred))
print(confusion_matrix(test_y, pred))

joblib.dump(clf, "clf.pk1")
