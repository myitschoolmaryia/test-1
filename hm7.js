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

2. Lightblum

let light = function () {
 
    this.getInfo = function () 
    {
        if (window.confirm('Включить лампочку?'))
        {
            alert('Лампочка включена');
            this.time = +prompt('Введите время работы лампочки');
        } 
        else 
        {
            this.time = 0;
            alert('Лампочка выключена');
            throw new Error('Лампочка выключена');
        }
        this.power = prompt('Введите мощность');
        this.cost = prompt('Введите стоимость');
    }

    getInfo();
 
    this.price = function () 
    {
        this.result = Number((this.power / 1000) * this.cost * this.time);

        alert('Общая сумма - ' + this.result);
    }

    price();
 
    this.total = function () 
    {
        if (this.time === 0)
        {
            alert('Лампочка не включена');
        }

        else 
        {
            alert('Лампочка проработала - ' + this.time);
        }
    }

    total();
};

light();

3. Kettle

let kettle = function () {
 
    this.getInfo = function () 
    {
        if (window.confirm('Включить чайник?'))
        {
            alert('Чайник закипает');
        } 
        else 
        {
            alert('Чайник отключен');
            throw new Error(alert('Чайник выключен'));
        }
        this.power = prompt('Введите мощность');
        this.volume = prompt('Введите объем');
        this.water = prompt('Кол-во воды');
    }
    getInfo();

    this.time = function () 
    {
        if (this.volume >= this.water)
        {
        this.result = (Number(this.water) * 4200 * 80) / (Number(this.power) * 0,6);

        alert('Время кипения - ' + this.result);
        }
        else alert('Объем воды превышает допустимый')
    }

    time();
}

kettle();

4. Auto

let auto = function () {
 
    this.getInfo = function () 
    {
        this.serie = prompt('Введите марку');
        this.numberAuto = prompt('Введите номер');
    }
    getInfo();

    this.about = function()
    {
        alert('Марка машины - ' + this.serie + ' ' + 'Номер авто: ' + this.numberAuto);
    }

    about();

    this.power = function()
    {
        if (window.confirm('Включить двигатель?'))
        {
            alert('Машина заведена');
        } 
        else 
        {
            throw new Error(alert('Двигатель выключен'));
        }
    }

    power();

    this.road = function () 
    {
        this.transmission = prompt('Выберите передачу: 1. Вперед, 2. Назад, 3. Нейтральная');

        this.speed = prompt('Скорость машины');

        this.time = prompt('Время поездки в часах');

        switch(transmission)
        {
            case '1': alert('Пройдено киллометров - ' + (this.result = this.speed * this.time)); break;
            case '2': alert('Пройдено киллометров - ' + (this.result = this.speed / this.time)); break;
            case '3': alert('Пройдено киллометров - ' + '0'); break;
        }
    }


    road();
}

auto();

5.User
