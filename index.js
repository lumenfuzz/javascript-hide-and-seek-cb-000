function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  const lis = document.getElementById('grand-node').querySelectorAll('div')
  var child
  for (var i = 0; i < lis.length; i++) {
    child = lis[i].querySelectorAll('div')
    if (child.length == 1) {
      return lis[i].querySelector('div')
    }
  }
}

function increaseRankBy(n) {
  var lists = document.querySelectorAll('.ranked-list')
  var childList
  for (var i = 0; i < lists.length; i++) {
    childList = lists[i]
    for (var j = 0; j < childList.length; j++) {
      childList[i].innerHTML = (parseInt(childList[i].innerHTML) + n).toString()
    }
  }
  // let rank = 1
  // rank += n
  // return rank
}
