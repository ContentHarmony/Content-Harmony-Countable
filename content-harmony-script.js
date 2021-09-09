<script>
  
  
  // STANDARD COUNTABLE.JS CODE GETS PASTED HERE

  
  function text(e, t) {
    "textContent" in document.body ? (e.textContent = t) : (e.innerText = t);
  }
  var fields = { 
    paragraphs: document.getElementById("result__paragraphs"), 
    sentences: document.getElementById("result__sentences"), 
    words: document.getElementById("result__words"), 
    characters: document.getElementById("result__characters"), 
    all: document.getElementById("result__all") 
  };
  Countable.on(document.getElementById("countableArea"), function (e) {
      for (var t in fields) text(fields[t], e[t]);
  });
  
  var val = countableArea.value;
  (countableArea.value = ""), countableArea.focus(), (countableArea.value = val);


</script>
