(function app($) {
  var amountExercisesToDisplay = 5;

  var exercises = [
    {
      name: 'Core Rotation',
      originalVideo: 'https://www.youtube.com/watch?v=5yS9OF5l_Dc',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/core_rotation.mp4'
    },
    {
      name: 'Superman Kick',
      originalVideo: 'https://www.youtube.com/watch?v=5yS9OF5l_Dc',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/superman_kick.mp4'
    },
    {
      name: 'Sprint & Tuck Jump',
      originalVideo: 'https://www.youtube.com/watch?v=nhemH42LNO8',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/sprint_tuck.mp4'
    },
    {
      name: 'Open-Knee Skip',
      originalVideo: 'https://www.youtube.com/watch?v=nhemH42LNO8',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/open-knee_skip.mp4'
    },
    {
      name: 'Arm Burner',
      originalVideo: 'https://www.youtube.com/watch?v=nhemH42LNO8',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/arm_burner.mp4'
    },
    {
      name: 'Hacky Sack',
      originalVideo: 'https://www.youtube.com/watch?v=Xuwena9YsVY',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/hacky_sack.mp4'
    },
    {
      name: 'Hop Scotch',
      originalVideo: 'https://www.youtube.com/watch?v=Xuwena9YsVY',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/hop_scotch.mp4'
    },
    {
      name: 'Jumping Jack',
      originalVideo: 'https://www.youtube.com/watch?v=Xuwena9YsVY',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/jumping_jack.mp4'
    },
    {
      name: 'Cross Country Ski',
      originalVideo: 'https://www.youtube.com/watch?v=Xuwena9YsVY',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/cross_country_ski.mp4'
    },
    {
      name: 'Frog',
      originalVideo: 'https://www.youtube.com/watch?v=Xuwena9YsVY',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/frog.mp4'
    },
    {
      name: '45 degree kicks',
      originalVideo: 'https://www.youtube.com/watch?v=Xuwena9YsVY',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/45_degree_kicks.mp4'
    },
    {
      name: 'Double 45 degree kicks',
      originalVideo: 'https://www.youtube.com/watch?v=Xuwena9YsVY',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/double_45_degree_kicks.mp4'
    },
    {
      name: 'Jumping Jack with Knee Tuck',
      originalVideo: 'https://www.youtube.com/watch?v=Xuwena9YsVY',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/jumping_jack_knee_tuck.mp4'
    },
    {
      name: 'Cross Country Ski with Knee Tuck',
      originalVideo: 'https://www.youtube.com/watch?v=Xuwena9YsVY',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/cross_country_ski_knee_tuck.mp4'
    },
    {
      name: 'Squat Jumps',
      originalVideo: 'https://www.youtube.com/watch?v=Xuwena9YsVY',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/squat_jumps.mp4'
    },
    {
      name: 'Lunge Jumps',
      originalVideo: 'https://www.youtube.com/watch?v=Xuwena9YsVY',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/lunge_jumps.mp4'
    },
    {
      name: 'Tijeras Piernas + Brazos hacia atrás y adelante',
      originalVideo: 'https://www.youtube.com/watch?v=nQTXauPQ2ME',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/tijeras_piernas_brazos_atras_adelante.mp4'
    },
    {
      name: 'Aperturas Laterales',
      originalVideo: 'https://www.youtube.com/watch?v=nQTXauPQ2ME',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/aperturas_laterales.mp4'
    },
    {
      name: 'Subir Rodillas',
      originalVideo: 'https://www.youtube.com/watch?v=nQTXauPQ2ME',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/subir_rodillas.mp4'
    },
    {
      name: 'Elevaciones Frontales',
      originalVideo: 'https://www.youtube.com/watch?v=nQTXauPQ2ME',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/elevaciones_frontales.mp4'
    },
    {
      name: 'Subir Ambas Rodillas',
      originalVideo: 'https://www.youtube.com/watch?v=nQTXauPQ2ME',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/subir_ambas_rodillas.mp4'
    },
    {
      name: 'Brazos con Rodillas',
      originalVideo: 'https://www.youtube.com/watch?v=nQTXauPQ2ME',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/brazos_con_rodillas.mp4'
    },
    {
      name: 'Push-up On Wall',
      originalVideo: 'https://www.youtube.com/watch?v=qBy0xZPoWzM',
      type: 'video/mp4',
      src: 'https://s3-sa-east-1.amazonaws.com/aquaerobics/push_up_on_wall.mp4'
    }
  ];

  /*
   * getURLParam()
   * function to get a URL parameter by name
   *
   * arguments:
   * name (String) - name of the url parameter
   *
   * returns:
   * url parameter value (as string) or null
   */
  function getURLParam(name) {
    var regex = new RegExp(name + '=([^&]+)');
    var match = window.location.href.match(regex);
    return match ? match[1] : null;
  }

  /*
   * addVideo()
   * function to add an exercise to the DOM
   *
   * arguments:
   * exercise (Object) - an exercise object
   *
   * returns:
   * null
   *
   * side effects:
   * appends a <li/> with a <video/> to the DOM
   */
  function addVideo(exercise) {
    $('#exercises').append([
      '<li>',
      '<div>',
      '<a href="' + exercise.originalVideo + '"',
      'target="_blank">' + exercise.name + '</a>',
      '</div>',
      '<video width="320" height="240" controls',
      'type="' + exercise.type + '"',
      'src="' + exercise.src + '"',
      '/>',
      '</li>'
    ].join(' '));
  }

  /*
   * randomIntegers()
   * function to randomly generate numbers
   *
   * arguments:
   * amount (Integer) - amount of numbers to generate
   * max (Integer) - max integer value to return (a min value of 0 is assumed)
   *
   * returns:
   * array of integers
   */
  function randomIntegers(amount, max) {
    // make sure we don't try to return more integers than the max value
    var sanitizedAmount = (max < amount) ? max : amount;

    var result = [];

    while (result.length < sanitizedAmount) {
      var rand = Math.floor(Math.random() * max);

      // only add an integer that is not already in the list
      if (!result.includes(rand)) {
        result.push(rand);
      }
    }

    return result;
  }

  /* -- Start Program -- */

  /*
   * The exercise ids are supposed to be sent as a comma separated list in the
   * `ids` query parameter.
   *
   * If they are not sent, a random list will be generated and the user will
   * be redirected to a page with the `ids` query parameter set to these values.
   */
  var indices = (getURLParam('ids') || '')
    .split(',')
    .map(function convertToInt(obj) {
      return parseInt(obj, 10);
    })
    .filter(function isNotNaN(obj) {
      return !isNaN(obj);
    });

  if (indices.length > 0) {
    indices.forEach(function addExerciseToPage(i) {
      var exercise = exercises[i];
      return exercise ? addVideo(exercise) : null;
    });
    return;
  }

  // no indices found, generate random values and redirect user
  var ids = randomIntegers(amountExercisesToDisplay, exercises.length);
  window.location.replace('/?ids=' + ids.join(','));
}(window.jQuery));
