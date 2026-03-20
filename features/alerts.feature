Funcionalidade: Alerts

História: Como usuário, posso interagir com alertas do sistema para visualizar mensagens e confirmar ações

Cenário: Exibir um alerta simples ao clicar no botão 
Dado que o usuário está na página Alerts do DemoQA
Quando clica no botão para exibir um alerta simples
Então o sistema deve exibir um alerta com a mensagem "You clicked a button"

Cenário: Exibir um alerta, após um tempo de espera
Dado que o usuário está na página Alerts do DemoQA
Quando clica no botão para exibir um alerta com atraso
Então o sistema deve exibir um alerta com a mensagem "This alert appeared after 5 seconds"

Cenário: Exibir uma caixa de confirmação ao clicar no botão 
Dado que o usuário está na página Alerts do DemoQA
Quando clica no botão para exibir uma caixa de confirmação 
Então o sistema deve exibir a mensagem "You selected ok" ao confirmar

Cenário: Exibir uma caixa de diálogo para inserção de texto
Dado que o usuário está na página Alerts do DemoQA
Quando clica no botão  para exibir uma caixa de diálogo e insere o nome "Higo"
Então o sistema deve exibir a mensagem com o nome inserido
