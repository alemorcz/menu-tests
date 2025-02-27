#!/bin/bash

while true; do
    clear
    echo "============================="
    echo "       MENÚ PRINCIPAL        "
    echo "============================="
    echo "1. Proyecto Angular"
    echo "2. Pruebas Unitarias"
    echo "3. Hola Mundo"
    echo "4. Prueba Selenium"
    echo "5. Prueba Cucumber"
    echo "6. Salir"
    echo "============================="
    read -p "Seleccione una opción: " opcion

    case $opcion in
        1)
            echo "Iniciando el proyecto Angular..."
            cd /proyecto-angular || { echo "No se encontro el proyecto"; exit 1; }
            ng serve
            ;;
        2)
            echo "Ejecutando pruebas unitarias con Jest..."
            cd /proyecto-angular || { echo "No se encontro el proyecto"; exit 1; }
            npx jest hola-test.spec.js
            ;;
        3)
            echo "Ejecutando script hola.hs..."
            if [ -f "./hola.sh" ]; then
			./hola.sh
            else
                echo "El script hola.sh no existe en la ruta actual."
            fi
            ;;
	    4)
            echo "Ejecutando pruebas con Selenium..."
            cd /proyecto-angular/tests || { echo "No se encontro el archivo de test"; exit 1; }
            testGithub.spec.js
            ;;
	    5)
	    echo "Ejecutando pruebas con Cucumber..."
	    cd /proyecto-angular/tests || { echo "No se encontro ninguna prueba cucumber"; exit 1; }
	    npx cucumber-js --import=step_definitions/**/*.js features/h1-validation.feature
	    ;;

       	6)
            echo "Saliendo del menú..."
            exit 0
            ;;
        *)
            echo "Opción no válida. Intente nuevamente."
            ;;
    esac
    read -p "Presione Enter para continuar..."
done
