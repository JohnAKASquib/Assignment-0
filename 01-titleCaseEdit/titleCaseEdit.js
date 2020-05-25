
function titleCaseEdit(title) {
    title=title.toLowerCase();
    title=title.split(' ');
    for(i=0;i<title.length;i++){
      title[i]=title[i].charAt(0).toUpperCase() + title[i].slice(1);
    }
    title=title.join(' ');
    return title;
   // console.log(title);
}

// Do not edit this line;
module.exports = titleCaseEdit;