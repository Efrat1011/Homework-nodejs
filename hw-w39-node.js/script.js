 class Question {
      constructor(text, answer) {
        this.text = text;
        this.answer = answer;
      }

      check(userAnswer) {
        return userAnswer.toLowerCase() === this.answer.toLowerCase();
      }
    }

    const ques1 = new Question("JavaScript қай тілдің тобына жатады?", "бейнелік");
    const otvet1 = "бейнелік"; 

    const ques2 = new Question("HTML дегеніміз не?", "белгілеу");
    const otvet2 = "безендіру"; 

    
    alert("Бірінші сұрақ:\n" + ques1.text);
    console.log("1-сұрақ:", ques1.text);
    console.log("Менің жауабым:", otvet1);
    console.log("Тексеру нәтижесі:", ques1.check(otvet1));

 
    alert("Екінші сұрақ:\n" + ques2.text);
    console.log("2-сұрақ:", ques2.text);
    console.log("Менің жауабым:", otvet2);
    console.log("Тексеру нәтижесі:", ques2.check(otvet2));