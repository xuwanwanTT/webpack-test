import _ from 'lodash'
import $ from 'jquery'
import foo from './foo.js'

function component(){
  // var element = document.createElement('div')
  var element = $('<div><div>')

  // element.innerHTML = _.join(['Hello','webpack'],' ')
  element.html(_.join(['Hello','webpack'],' '))
  // return element
  return element.get(0)
}

document.body.appendChild(component())
foo()