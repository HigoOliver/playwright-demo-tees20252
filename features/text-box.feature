Funcionalidade: Text Box

História: Como usuário, posso preencher campos de texto para registrar minhas informações pessoais

Cenário: Enviar formulário com todos os campos preenchidos corretamente
Dado que o usuário está na página Text Box do DemoQA
Quando preenche todos os campos com seus dados pessoais
E submete o formulário
Então o sistema deve exibir as informações informadas abaixo das caixas de texto

Cenário: Enviar formulário sem preencher nenhum campo 
Dado que o usuário está na página Text Box do DemoQA
Quando não preenche nenhum dos campos de texto
E submete o formulário
Então o sistema não deve exibir nenhuma informação do formulário
