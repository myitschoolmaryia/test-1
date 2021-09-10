1. Calculator

let calculator = function(){

    this.condition = function () {
        const result = window.confirm('Включить калькулятор?');
        if (result) {
              alert('Calculator ON')
          } else {
              alert('Calculator OFF')
              throw new Error('OFF');
          };
    }

    condition();

    this.itog = function () 
    {
        this.a = Number(prompt('Enter a'));
        this.b = Number(prompt('Enter b'));
        this.action = prompt('Enter Action 1: Sum, 2: Del, 3: Ymnozh, 4: Razn')

        this.sum = function()
        {
            this.test = this.a + this.b;
            alert('Sum = ' + this.test);
        }
    
        
        this.del = function()
        {
            this.test = this.a / this.b;
            alert('Del = ' + this.test);
        }
    
        
        this.proiz = function()
        {
            this.test = this.a * this.b;
            alert('Proiz = ' + this.test);
        }
    
        
        this.razn = function()
        {
            this.test = this.a - this.b;
            alert('Razn = ' + this.test);
        }

        switch(action)
        {
        case '1': sum(); break;
        case '2': del(); break;
        case '3': proiz(); break;
        case '4': razn(); break;
        default: break;
        }
  
    }
    itog();

    this.end = function () {
        const result = window.confirm('Выключить калькулятор?');
        if (result) {
              alert('Calculator OFF')
              throw new Error('OFF');
          } else {
              itog();
          };
    }

    for(;;)
    {
        end();
    }
}

  calculator();
