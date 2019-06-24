// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/javascript/questions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Quiz = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Question = function Question(id, question, choices, answer) {
  _classCallCheck(this, Question);

  this.id = id, this.question = question, this.choices = choices, this.answer = answer, this.userAnswer = "";
};

var question1 = new Question(1, "Which of the following is not a primary color?", ["Green", "Blue", "Yellow", "Red"], "Green");
var question2 = new Question(2, "If there are 12 inches in a foot and 3 feet in a yard, how many feet do you have?", ["2", "3", "12", "Am I supposed to know this?!"], "2");
var question3 = new Question(3, "Which of the following vegetables is botanically considered a fruit?", ["Carrot", "Tomato", "Broccoli", "Celery"], "Tomato");
var question4 = new Question(4, "How many teeth does the average adult human have?", ["32", "26", "18", "24"], "32");
var question5 = new Question(5, "Which of the following films was directed by James Cameron?", ["Bad Boys", "The Terminator", "Friday", "Space Jam"], "The Terminator");
var question6 = new Question(6, "Which of the drinks below traditionally has more than two ingredients?", ["Screwdriver", "Mimosa", "Old Fashioned", "Martini"], "Old Fashioned");
var question7 = new Question(7, "What is in the center of a Blow-Pop?", ["Chocolate", "Gum", "Caramel", "The stick"], "Gum");
var question8 = new Question(8, "What is Mark Twain's real name?", ["Samuel Clemens", "Jackson Andrews", "Benjamin Davis", "Donald Smith"], "Samuel Clemens");
var question9 = new Question(9, "What did the crocodile swallow in Peter Pan?", ["Alarm clock", "Captain Hook's hook", "Fairy dust", "Rufio"], "Alarm clock");
var question10 = new Question(10, "Which is the largest ocean?", ["Atlantic", "Pacific", "Indian", "Arctic"], "Pacific");
var question11 = new Question(11, "If you pass the second-place runner in a race, what place are you in?", ["First", "Second", "Third", "I would never run in a race!"], "Second");
var question12 = new Question(12, "The person who did the voice for Yoda also is the voice for which other character?", ["Miss Piggy", "Elmo", "Elmer Fudd", "Count Dracula"], "Miss Piggy");
var question13 = new Question(13, "Who was the first civilian to own a Hummer?", ["Arnold Schwarzenegger", "LeBron James", "Bill Gates", "Jay-Z"], "Arnold Schwarzenegger");
var question14 = new Question(14, "Who was the first President to be born at a hospital?", ["Jimmy Carter", "Ronald Reagan", "Gerald Ford", "Richard Nixon"], "Jimmy Carter");
var question15 = new Question(15, "If you walk south from Detroit, where would you end up first?", ["Canada", "Ohio", "Indiana", "Pennsylvania"], "Canada");
var Quiz = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15];
exports.Quiz = Quiz;
},{}],"assets/javascript/app.js":[function(require,module,exports) {
"use strict";

var _questions = require("./questions");

// create variables
var correct = 0;
var incorrect = 0;
var counter = 3 * 60;
var currentTime;
var $choice;
var questionBank = []; // create run function

function run() {
  // clear interval
  clearInterval(timer); // empty timer div

  $("#timer").empty(); // restart interval

  var timer = setInterval(decrement, 1000); // empty results div

  $("#results").empty(); // reset correct and incorrect

  correct = 0;
  incorrect = 0; // reset counter

  counter = 3 * 60; // print current time to page

  $("#timer").text("Time Remaining: 3:00"); // hide start-quiz button

  $("#start-button").hide();
} // create decrement function to lower counter by one every second


function decrement() {
  counter--; // convert the counter to time and print to page

  var $counter = counter * 1000;
  currentTime = timeConverter($counter); // print to page

  $("#timer").text("Time Remaining: ".concat(currentTime)); // if counter runs out, run gradeQuiz function

  if (counter === 0) {
    gradeQuiz();
    clearInterval(timer);
    $("#start-button").show();
    $("#timer").empty();
    $("#quiz-form").empty();
  }
}

function timeConverter(t) {
  var minutes = Math.floor(t / 1000 / 60);
  var seconds = t / 1000 - minutes * 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }

  return minutes + ":" + seconds;
} // Create quiz creation function for each question in the quiz bank


function renderQuiz() {
  // clear #quiz-form div
  $("#quiz-form").empty(); // add questions to question bank

  questionBank.push(_questions.Quiz); // loop through quizBank array

  questionBank[0].forEach(function (question, index) {
    // create div to hold question
    var $question = $("<div>").addClass("form-group my-4"); // add question to div

    var $label = $("<h5>").text(index + 1 + ") " + question.question).addClass("question").appendTo($question); // shuffle answer choices

    question.choices = question.choices.sort(function () {
      return 0.5 - Math.random();
    }); // create a loop to iterate through quizBank's choices and create radio buttons for each one

    for (var i = 0; i < question.choices.length; i++) {
      // create a div for choice and add bootstrap classes
      $choice = $("<div>").addClass("form-check"); // create an input tag for radio buttons

      var $radio = $("<input>"); // add attributes to radio buttons

      $radio.attr({
        type: "radio",
        value: question.choices[i],
        name: index,
        class: "form-check-input"
      }).appendTo($choice); // create label to print choice to page

      var $choiceLabel = $("<label>");
      $choiceLabel.text(question.choices[i]).addClass("form-check-label").appendTo($choice); // add whole radio button to question

      $choice.appendTo($question);
    } // add question to page


    $question.appendTo($("#quiz-form"));
  }); // create a submit button

  var $submitBtn = $("<button>");
  $submitBtn.attr({
    id: "submit-button",
    class: "btn btn-success btn-lg col-12 col-md-4 col-lg-3 my-4"
  });
  var $submitBtnSpan = $("<span>").text("Submit").appendTo($submitBtn);
  $submitBtn.appendTo($("#quiz-form"));
} // create a "change" listener for all radio buttons but bind them to quiz-form since it's permanently on the page


$("#quiz-form").on("change", ".form-check-input", function () {
  // Get question index out of "name" attribute so we know what question you answered
  var questionIndex = $(this).attr("name"); // get value out of radio button you selected

  var answer = $(this).val(); // set answer to quizBank's userAnswer property

  questionBank[0].userAnswer = answer;
});

function gradeQuiz() {
  // check to see if userAnswer === answer
  questionBank[0].forEach(function (question) {
    console.log(question);
    var $userAnswer = question.userAnswer;
    var $answer = question.answer;

    if ($userAnswer === $answer) {
      correct++;
    } else {
      incorrect++; // print questions user got wrong and correct answer
      // var $question = $("<h5>").text(i + 1 + ") " + questionBank[i].question);

      var $question = $("<h5>").text("".concat(question.id, ") ").concat(question.question));
      var $incorrectAnswer = $("<p>").addClass("incorrect-answer").text("Your Answer: ".concat($userAnswer));
      var $correctAnswer = $("<p>").addClass("correct-answer").text("Correct Answer: ".concat($answer));
      $("#results").append($question, $incorrectAnswer, $correctAnswer);
    }
  }); // create div to hold results

  var $results = $("<div>").addClass("mb-5"); // create h2 for correct and incorrect

  var $correct = $("<h2>").text("Correct: ".concat(correct));
  var $incorrect = $("<h2>").text("Incorrect: ".concat(incorrect));
  var percent = Math.round(correct / questionBank.length * 100);
  var $percent = $("<h2>").text("Percent Correct: ".concat(percent, "%"));
  $results.append($correct, $incorrect, $percent);
  $("#results").prepend($results);
}

$("#start-button").on("click", function () {
  run();
  renderQuiz();
});
$(document).on("click", "#submit-button", function (event) {
  event.preventDefault();
  gradeQuiz();
  clearInterval(timer);
  $("#start-button").show();
  $("#timer").empty();
  $("#quiz-form").empty();
});
},{"./questions":"assets/javascript/questions.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52343" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/javascript/app.js"], null)
//# sourceMappingURL=/app.25a60053.js.map