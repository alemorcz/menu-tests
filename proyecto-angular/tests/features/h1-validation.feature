Feature: Validar el encabezado en la página principal

  Scenario: Verificar el título de la pagina aparece
    Given que estoy en la página principal
    Then debería ver "Hola!, soy Alejandra Moreno" en el título de la página principal
