$(function (){
  windSpeed = 3;

  backArtAreaArr = [];
  backArtCols = ['000000', 'c7a796', 'b99e8c', 'b29588', 'edeb74'];
  treeArtAreaArr = [
    0, 0, 0, 0, 11, 11, 11, 11, 14, 14, 14, 14, 0, 0, 0, 0,
    0, 0, 0, 0, 11, 12, 12, 12, 13, 13, 13, 14, 0, 0, 0, 0,
    0, 0, 0, 0, 11, 12, 12, 13, 13, 13, 13, 14, 0, 0, 0, 0,
    0, 0, 11, 11, 11, 11, 14, 14, 14, 14, 14, 14, 14, 14, 0, 0,
    0, 0, 0, 6, 7, 7, 7, 6, 6, 6, 5, 5, 4, 0, 0, 0,
    0, 0, 0, 0, 6, 8, 9, 6, 8, 9, 5, 4, 0, 0, 0, 0,
    0, 0, 0, 6, 7, 6, 6, 6, 6, 5, 5, 5, 4, 0, 0, 0,
    0, 0, 6, 7, 7, 7, 6, 10, 6, 5, 5, 4, 5, 4, 0, 0,
    0, 0, 0, 6, 7, 6, 10, 6, 10, 5, 4, 5, 4, 0, 0, 0,
    0, 0, 6, 7, 6, 6, 6, 6, 5, 4, 5, 4, 5, 4, 0, 0,
    0, 6, 7, 6, 6, 6, 6, 5, 5, 5, 4, 5, 4, 5, 4, 0,
    0, 0, 6, 6, 6, 5, 5, 5, 5, 5, 5, 4, 5, 4, 0, 0,
    0, 6, 6, 5, 5, 5, 5, 5, 5, 5, 4, 5, 4, 5, 4, 0,
    6, 6, 6, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  ];
  treeArtCols = ['000000', 'D7A085', 'C8957E', 'A67A64', '8CAF6F', '96BC77', 'A0CA7E', 'A9D987', '000000', 'ffffff', '636A66', 'A48A65', 'B89A71', 'B0956A', '9E825E'];
  treeMoveArtAreaArr = [
    0, 0, 0, 0, 11, 11, 11, 11, 14, 14, 14, 14, 0, 0, 0, 0,
    0, 0, 0, 0, 11, 12, 12, 12, 13, 13, 13, 14, 0, 0, 0, 0,
    0, 0, 0, 0, 11, 12, 12, 13, 13, 13, 13, 14, 0, 0, 0, 0,
    0, 0, 11, 11, 11, 11, 14, 14, 14, 14, 14, 14, 14, 14, 0, 0,
    0, 0, 0, 6, 7, 7, 7, 6, 6, 6, 5, 5, 4, 0, 0, 0,
    0, 0, 0, 0, 6, 0, 0, 6, 0, 0, 5, 4, 0, 0, 0, 0,
    0, 0, 0, 6, 7, 6, 6, 6, 6, 5, 5, 5, 4, 0, 0, 0,
    0, 0, 6, 7, 7, 7, 6, 0, 6, 5, 5, 4, 5, 4, 0, 0,
    0, 0, 0, 6, 7, 6, 0, 6, 0, 5, 4, 5, 4, 0, 0, 0,
    0, 0, 6, 7, 6, 6, 6, 6, 5, 4, 5, 4, 5, 4, 0, 0,
    0, 6, 7, 6, 6, 6, 6, 5, 5, 5, 4, 5, 4, 5, 4, 0,
    0, 0, 6, 6, 6, 5, 5, 5, 5, 5, 5, 4, 5, 4, 0, 0,
    0, 6, 6, 5, 5, 5, 5, 5, 5, 5, 4, 5, 4, 5, 4, 0,
    6, 6, 6, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  ];
  treeMoveArtCols = ['000000', 'D7A085', 'C8957E', 'A67A64', '8CAF6F', '96BC77', 'A0CA7E', 'A9D987', '000000', 'ffffff', '636A66', 'A48A65', 'B89A71', 'B0956A', '9E825E'];

  for (var i = 0; i < 64; i++) {
    if ((Math.random() < 0.5 || i > 31) && (i != 0 && i !=31)) {
      if (Math.random() < 0.6) {
        if (Math.random() < 0.4) {
          if (Math.random() < 0.95) {
            backArtAreaArr.push(3);
          } else {
            backArtAreaArr.push(4);
          }
        } else {
          backArtAreaArr.push(2);
        }
      } else {
        backArtAreaArr.push(1);
      }
    } else {
      backArtAreaArr.push(0);
    }
  }
  for (var i = 0; i < 5; i++) {
    $.keyframe.define([{
      name: 'backShiny' + i,
      from: {
        'filter' : 'brightness(1)'
      },
      to: {
        'filter' : 'brightness(' + (Math.random()*0.15+0.8) + ')'
      }
    }]);
  }
  for (var i = 0; i < 64; i++) {
    colPointThis = backArtAreaArr[i];
    $('<span>').addClass('blockCell').css('background-color', ((colPointThis != 0) ? '#' + backArtCols[colPointThis] : '')).appendTo('#backArtArea');
    $('.blockCell:eq(' + i + ')').playKeyframe (
      'backShiny' + Math.floor(Math.random()*5) + ' ' + (Math.random()*0.5+0.5) + 's ease infinite alternate',
    );
  }

  for (var i = 224; i < 256; i++) {
    if (i >= 224 && (6 <= i%16 && i%16 <= 9)) {
      treeArtAreaArr.push(Math.floor(Math.random()*3+1));
    } else {
      treeArtAreaArr.push(0);
    }
  }
  for (var i = 0; i < 5; i++) {
    $.keyframe.define([{
      name: 'treeShiny' + i,
      from: {
        'filter' : 'brightness(1)'
      },
      to: {
        'filter' : 'brightness(' + (Math.random()*0.03+0.96) + ')'
      }
    }]);
  }
  for (var i = 0; i < 256; i++) {
    colPointThis = treeArtAreaArr[i];
    $('<span>').addClass('tBlockCell').css('background-color', ((colPointThis != 0) ? '#' + treeArtCols[colPointThis] : '')).appendTo('#treeArtArea');
    $('.tBlockCell:eq(' + i + ')').playKeyframe (
      'treeShiny' + Math.floor(Math.random()*5) + ' ' + (Math.random()*0.2+0.2) + 's ease infinite alternate',
    );
  }

  for (var i = 224; i < 256; i++) {
    if (i >= 224 && (6 <= i%16 && i%16 <= 9)) {
      treeMoveArtAreaArr.push(Math.floor(Math.random()*3+1));
    } else {
      treeMoveArtAreaArr.push(0);
    }
  }
  for (var i = 0; i < 5; i++) {
    $.keyframe.define([{
      name: 'treeMoveShiny' + i,
      from: {
        'filter' : 'brightness(1)'
      },
      to: {
        'filter' : 'brightness(' + (Math.random()*0.03+0.96) + ')'
      }
    }]);
    $.keyframe.define([{
      name: 'treeMoveMove' + i,
      from: {
        'transform' : 'translateX(0px) translateY(0px);'
      },
      to: {
        'transform' : 'translateX(' + (windSpeed-Math.random()*windSpeed*2) + 'px) translateY(' + (windSpeed-Math.random()*windSpeed*2) + 'px);'
      }
    }]);
  }
  for (var i = 0; i < 256; i++) {
    colPointThis = treeMoveArtAreaArr[i];
    $('<span>').addClass('tmBlockCell').css('background-color', ((colPointThis != 0) ? '#' + treeMoveArtCols[colPointThis] : '')).appendTo('#treeMoveArtArea');
    $('.tmBlockCell:eq(' + i + ')').playKeyframe (
      'treeMoveShiny' + Math.floor(Math.random()*5) + ' ' + (Math.random()*0.2+0.2) + 's ease infinite alternate',
    );
    $('.tmBlockCell:eq(' + i + ')').playKeyframe (
      'treeMoveMove' + Math.floor(Math.random()*5) + ' ' + (Math.random()*1.2+1.2) + 's ease infinite alternate',
    );
  }

  function resetWind() {
    for (var i = 0; i < 5; i++) {
      $.keyframe.define([{
        name: 'treeMoveMove' + i,
        from: {
          'transform' : 'translateX(0px) translateY(0px);'
        },
        to: {
          'transform' : 'translateX(' + (windSpeed-Math.random()*windSpeed*2) + 'px) translateY(' + (windSpeed-Math.random()*windSpeed*2) + 'px);'
        }
      }]);
    }
    for (var i = 0; i < 256; i++) {
      $('.tmBlockCell:eq(' + i + ')').playKeyframe (
        'treeMoveMove' + Math.floor(Math.random()*5) + ' ' + (Math.random()*1.2+1.2) + 's ease infinite alternate',
      );
    }
    $('#windSpeed').html(function (index,html) {
      return (windSpeed).toFixed(1);
    });
  }

  $(document).on('click','#windUp',function() {
    windSpeed += 0.5;
    resetWind();
  });
  $(document).on('click','#windDown',function() {
    windSpeed -= 0.5;
    resetWind();
  });
});
