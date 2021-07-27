# Conclusiones & Trabajo Futuro - Imaging & Video - Hardware

Al momento de estudiar el proceso de creación y manipulación de una imagen digital a una aplicación visual moderna, podemos encontrar muchas tecnica y efectos muy interesantes. Sin embargo, entender la teoria detras de las imagenes y videos es de suprema importancia.

## Algoritmos

### Z-Buffer

![Imagen dual mesas](https://brakeza.com/wp-content/uploads/2020/01/z_buffer_penguins_image.png)

Algoritmos como el z-buffer, o tambien llamado algoritmo de profundidad, creado por Edwin Catmull (expresidente de Pixar y Walt Disney Animation Studios, ganador del premio Turing) es de especial importancia cuando se trabaja sobre imagenes o video directamente por Hardware, y aunque está ampliamente extendido nos encontramos con algunas limitantes que es dificil ver cuando se realizan practicas a baja escala, con pocos datos, o con imagenes standar, como lo son por ejemplo:

- El algoritmo de búfer de profundidad no siempre es práctico debido al enorme tamaño de las matrices de profundidad e intensidad.
- La generación de una imagen con una trama de 500 x 500 píxeles requiere [50.000](https://www.javatpoint.com/computer-graphics-z-buffer-algorithm ) ubicaciones de almacenamiento para cada matriz, lo que es un gran uso de recursos computacionales a medida de que crezca el tamaño de la imagen. Debido a que estos proceso los realiza la praca graficadora puede ejecutarse de manera veloz, pero no deja de ser un procesamiento bastante alto
- El procesamiento de cada ráster pequeño requiere una matriz de solo 2500 elementos, pero el tiempo de ejecución aumenta porque cada polígono se procesa muchas veces.

La ventaja de este tipo de algoritmo es su eficiencia en procesar grandes cantidades de datos en periodos cortos de tiempo.

Por ejemplo, el tiempo de carga en el taller 1 de la imagen del Ascii, superaba los 5 segundos de procesamiento computacional hasta que finalmente se podían ver representasiones visuales en pantalla, con lo que la implementación por Hardware es practicamente instantaneo, lo que es cerca del 80% de incremento en velocidad de procesamiento y de rendering.

### Coordenadas baricéntricas (n-simplex)

![Varicentricas](https://www.geogebra.org/resource/eDEt9PSa/XqAaxNzlaj6nJxL5/material-eDEt9PSa.png)

El algoritmo de coordenadas baricentricas por otro lado, es bastante eficiente computacionalmente, de orden lineal a la cantidad de vertices, ya que al ingresar un poligoco, como lo es un triangulo, tendrá que procesar los 3 lados para hallar sus coordenadas, si el poligono tiene 5 lados, evaluará 5 veces la distancia y encontrará dichas coordenadas, y si el polígono tiene n lados, la complejdiad computacionar será lineal a n.

### Vertex shader 

![Vertex](https://learnopengl.com/img/getting-started/pipeline.png)
	
Un sombreador de vértices es una función de procesamiento de gráficos que se utiliza para agregar efectos especiales a los objetos en un entorno 3D mediante la realización de operaciones matemáticas en los datos de los vértices de los objetos. Cada vértice puede definirse mediante muchas variables diferentes. Por ejemplo, un vértice siempre se define por su ubicación en un entorno 3D utilizando las coordenadas x, y y z. Los vértices también se pueden definir por
colores, coordenadas. Los vértices también se pueden definir por colores, texturas y características de iluminación. Los Vertex Shaders en realidad no cambian el tipo de datos; simplemente cambian los valores de los datos, de modo que un vértice emerge con un color diferente, texturas diferentes o una posición diferente en el espacio.

### Fragment Shader

![Vertex](https://i.ytimg.com/vi/C1ZUeHLb0YU/maxresdefault.jpg)


Un Fragment Shader es la etapa de Shader que procesará un Fragmento generado por la Rasterización en un conjunto de colores y un único valor de profundidad , herramienta principal para el desarrollo del taller, en donde se pasan las imagenes y los shaders son capaces a una gran velocidad mapear los vertices y los canales de color para ser manipulados.



## Conclusiones

En esta seccion realizamos diferentes metodologias implementadas por Hardware, y tecnicas para obtener varios resultados muy interesantes, y gracias a esta experiencia pudimos encontrar ciertas conclusiones:

- Dependiendo de la matriz kernel que se trabaje se pueden obtener diferentes efectos de manera sencilla usando los hsaders.
- La ocupacion de los caracteres para la representación gráfica de ascii art influye en el resultado ya que la imagen usada por el fragment shader usaba el caracter completo o parcial depentdiendo de la intensidad del color que encontraba en cada pixel, en ocasiones haciendo combinaciones de los caracteres de entrada.
- Para la tecnica de ascii art, no es necesario tener gran cantidad de posibles caracteres para obtener un resultado aceptable, en cambio para foto mosaico si lo es, y al igual que en el Ascii art podemos ver que el shader trata de combinar algunas de las imagenes para obtener unos bordes más definidos y en general un resultado mas acercado a la imagen original que en el metodo por software donde simplemente se reemplazaban valores por imagenes.
- En la realización de foto-mosaicos, la biblioteca de imágenes que se usa, debe ser lo suficientemente surtida y abastecida para lograr un buen resultado, entre mas imagenes diferentes se añadan, mas claro se hace el efecto y parecido a la imagen original, aunque de no ser así, aún el shader es capaz de interpretar muy bien la imagen para aplicar los efectos.

## Trabajo Futuro

Las aplicaciones que se pueden obtener en los avances e investigaciones que se realizan hoy en dia usando las tecnicas usadas en esta seccion pueden ser variadas, pero aca mencionamos algunas:

- Las mascaras de convolucion permiten filtrar imágenes para tomar información relevante, la cual es aplicable a otras diciplinas como reconocimiento de caracteristicas.

- El ascii art es una técnica de compresión de imágenes y videos muy interesante que puede dar mucho usos en diferentes campos, por ejemplo para equipos en donde no se necesite necesariamente pixeles y que posean poca capacidad computacional.
- Al momento de seleccionar la foto indicada en un fotomosaico o el caracter indicado en ascii art, podria ser muy util conocimientos en avances recientes de la inteligencia artificial, machine learning y computacion paralela.
- Hoy en día hay bastantes software que incorporan las tecnicas usadas en esta seccion que permiten visualizar las imagenes con diferentes aspectos.

> :ToCPrevNext