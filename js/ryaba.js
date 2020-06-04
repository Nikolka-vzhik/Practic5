const var1F = $('#var1');
const var2F = $('#var2');
const var3F = $('#var3');
const var4F = $('#var4');
const var5F = $('#var5');
const var6F = $('#var6');
const speachF = $('#speach');
const txtFirst = $('#result');
const btnCreate = $('#button-paste');
const btnReplace = $('#button-replace');



const txt = {
  "text":[
    "Жили-были (Поле1) да (Поле2)",
    "Была у них (Поле3)",
    "Снесла (Поле3) (Поле4), не простое - золотое",
    "- (Поле1) бил, бил - не разбил",
    "- (Поле2) била, била - не разбила",
    "(Поле5) бежала, {var6} задела, (Поле4) упало и разбилось.",
    "(Поле1) плачет, (Поле2) плачет, а (Поле3) кудахчет:","(Поле7)"
  ]
};

btnCreate.click(function() {
  txtFirst.html(txt.text);
})

btnReplace.click(function() {
  const var1 = var1F.val();
  const var2 = var2F.val();
  const var3 = var3F.val();
  const var4 = var4F.val();
  const var5 = var5F.val();
  const var6 = var6F.val();
  const speach = speachF.val();
    
  const newTxt = {
    "text":[
      `Жили-были ${var1} да ${var2}`,
      `Была у них ${var3}`,
      `Снесла ${var3} ${var4}, не простое - золотое`,
      `- ${var1} бил, бил - не разбил`,
      `- ${var2} била, била - не разбила`,
      `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
      `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
      `${speach}`,
    ]
  };

 txtFirst.html(newTxt.text);
})