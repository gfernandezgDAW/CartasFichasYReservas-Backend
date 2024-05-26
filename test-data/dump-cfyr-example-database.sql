-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: cfyr
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bg_category`
--

DROP TABLE IF EXISTS `bg_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bg_category` (
  `id` varchar(36) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bg_category`
--

LOCK TABLES `bg_category` WRITE;
/*!40000 ALTER TABLE `bg_category` DISABLE KEYS */;
INSERT INTO `bg_category` VALUES ('1963a99c-0718-450e-882c-5baad798f36e','2024-05-26 00:29:32.951857','2024-05-26 00:29:57.000000','Para adultos','Los juegos suelen contener humor explícito y/o situaciones que pueden resultar ofensivas para algunos adultos y no apropiadas para los jugadores más jóvenes.'),('5a702112-2052-48b9-a1ba-85b96d5a251b','2024-04-17 20:48:18.523384','2024-04-17 20:48:18.523384','Aventura','Los juegos de aventuras suelen tener temas de heroísmo, exploración y resolución de acertijos. La historia detrás de estos juegos suele tener elementos fantásticos e involucra a los personajes en algún tipo de búsqueda'),('64466833-4089-46b2-9768-6c3566c68bd7','2024-04-06 12:02:51.170840','2024-04-17 20:44:53.000000','Familiar','Son títulos accesible para toda la familia.'),('91cb0380-9bff-4808-bff9-39c73c32d80c','2024-04-18 19:35:05.370085','2024-04-18 19:35:05.370085','Jugador contra jugador','Modalidad de juego de mesa en la que los jugadores se enfrentan entre ellos'),('b242c904-cfe4-4aeb-8bdf-6d6e8ebd8bca','2024-04-17 20:44:02.929986','2024-04-17 20:44:07.000000','Educativo','Los juegos educativos han sido diseñados específicamente para enseñar a las personas sobre un tema determinado, ampliar conceptos, reforzar el desarrollo, comprender un evento histórico o una cultura, o ayudarlos a aprender una habilidad mientras juegan.'),('b27f0948-3cb3-408d-b608-6dab017b6478','2024-04-06 11:21:14.780094','2024-04-17 20:45:58.000000','Estrategia','Requieren planificación por parte de los jugadores para poder llevarse la victoria-'),('be926325-46b7-4ecc-894e-4aaf64a8ba22','2024-04-12 20:17:08.710012','2024-04-20 18:59:11.000000','Deducción','Los juegos de deducción son aquellos que requieren que los jugadores lleguen a conclusiones basadas en premisas disponibles. Estos juegos son bastante variados e incluyen varios tipos diferentes de razonamiento lógico. Los juegos del gato y el ratón como Scotland Yard son un tipo de juego de deducción en el que los jugadores utilizan un conjunto de observaciones y comentarios veraces para reducir las posibilidades y atrapar a un oponente en constante movimiento en la posición correcta. Los juegos de eliminación como el Cluedo esperan que los jugadores lleguen a la conclusión correcta después de reducir las posibilidades de una lista grande. \n\nLos juegos de señalización como el Logo permiten un conjunto de observaciones y comentarios de los jugadores (que pueden no ser veraces) para llegar a la conclusión correcta entre 2 o 3 opciones principales. Finalmente, esta categoría incluye juegos de inducción como Zendo, en los que los jugadores deben derivar una regla general a partir de posibilidades casi infinitas.'),('d5e1f91a-1b99-4528-8b18-2c24ccb6ce0a','2024-04-18 19:32:37.405799','2024-04-18 19:32:37.405799','Cooperativo','Un juego de mesa cooperativo es un juego de mesa en que los jugadores trabajan juntos para lograr un objetivo, de modo que o bien ganan o pierden como grupo. Como el nombre sugiere, este tipo de juegos refuerzan la cooperación por encima de la competición.1​ Los participantes típicamente juegan contra el juego en sí mismo, y a veces pueden hacerlo contra unos pocos jugadores oponentes, que adoptan el rol de traidores.');
/*!40000 ALTER TABLE `bg_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board_game`
--

DROP TABLE IF EXISTS `board_game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_game` (
  `id` varchar(36) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `title` varchar(255) NOT NULL,
  `coverArtImage` varchar(255) DEFAULT NULL,
  `minPlayers` int NOT NULL DEFAULT '1',
  `maxPlayers` int NOT NULL DEFAULT '1',
  `description` text NOT NULL,
  `introduction` varchar(255) NOT NULL,
  `averageLength` int NOT NULL DEFAULT '1',
  `minAge` int NOT NULL DEFAULT '3',
  `unitsAvaliable` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_game`
--

LOCK TABLES `board_game` WRITE;
/*!40000 ALTER TABLE `board_game` DISABLE KEYS */;
INSERT INTO `board_game` VALUES ('5140e01e-068b-4b53-b37d-0e7660ed690c','2024-04-09 19:41:36.285633','2024-04-23 17:47:10.000000','Catan','NzQokRx92uRyDQ3fxmMl38SXKho63R.png',3,4,'Catan es la primera piedra sobre la que se construye cualquier ludoteca. Diseñado por Klaus Teuber en 1995 y ganador del Spiel des Jahres, ha sido el juego de mesa que ha revolucionado los juegos de mesa modernos. Este juego funciona con un sistema de comercio, donde los jugadores pueden intercambiar cartas de su mano entre ellos para construir carreteras, pueblos y ciudades.\n\nCatan contiene múltiples factores que hacen que sea altamente rejugable. Se juega sobre un tablero hexagonal, donde los jugadores colocan sus poblados y ciudades. Cada hexágono tiene un número, que cambia partida tras partida. Los números son la suma de los dados que se tiran en cada turno. Según si un número es más o menos común, el número es grande y rojo (más posibilidades de aparecer), grande (posibilidades altas), mediano, o pequeño. Los jugadores que tengan un poblado adyacente a un hexágono con el número que sale al tirar el dado, cobran de este hexágono. Hay cinco recursos: madera que se produce en los bosques, arcilla que se produce en los cerros, lana que producen los pastos, cereales que producen los sembrados y minerales que se producen en las montañas. Con estos recursos se pueden construir más poblados y carreteras, convertir poblados en ciudades o comprar cartas de desarrollo. Dependiendo de la estrategia de cada jugador, debe gestionar sus recursos para conseguir puntos de victoria. \n\nEn Catan el comercio es fundamental. Es posible que un jugador no tenga un tipo de recurso que necesita en ese momento. En este caso, en una fase de su turno, puede intercambiar sus recursos con otros jugadores. El coste del intercambio depende de lo que conviene a cada jugador, y durante la partida puede variar según los intereses de cada uno. ¡Negociar de forma inteligente es una de las claves para vencer en Catan! Otra opción es tener un poblado en un puerto, que se encuentran en los bordes del tablero donde los costes están marcados, o, si no hay otro remedio, intercambiar cuatro cartas de un recurso por una carta de otro recurso cualquiera con la banca. Cada partida depende de una combinación de la colocación de los hexágonos, poblados, números y de los jugadores. Los dados afectan muy poco el resultado de una partida, porque esta es la suma de decisiones de la gestión de recursos de cada jugador. El jugador que sea capaz de gestionar mejor sus recursos, será el ganador de la partida. \n\nEn Catan se gana con puntos de victoria, que se generan cuando los jugadores colocan poblados, ciudades, construyen la ruta más larga o el ejército más grande, o cuando compran cartas de desarrollo que pueden dar puntos de victoria. Aunque hay muchos factores que pueden afectar una partida, es un juego muy rápido y sencillo de explicar, con pocas mecánicas y un número limitado de decisiones a tomar. Las decisiones que toman los jugadores suelen tener efecto inmediato e impactan directamente en el camino hacia la victoria no solo del jugador activo, sino también del resto de jugadores. En Catan hay mucha interacción entre jugadores. Por ejemplo, cuando un jugador saca un siete en los dados, mueve al ladrón: una ficha en el tablero que prohíbe la generación de recursos en el hexágono donde está colocado. Catan está perfectamente equilibrado, por lo que las victorias se ganan por muy poco margen, manteniendo la tensión de la partida hasta el final. \n\nEn familia o con amigos, Catan es el juego de mesa imprescindible para todos los hogares. Con reglas rápidas de aprender y fáciles de explicar, este juego es la puerta de entrada para jugadores sociales que quieren probar los juegos de mesa modernos ¡Aprende cómo jugar y mucho más en Devir TV!','Catan es la primera piedra sobre la que se construye cualquier ludoteca. Diseñado por Klaus Teuber en 1995',60,10,4),('5fdef89d-a966-4ea8-b168-98d903e24f50','2024-04-12 20:16:06.525811','2024-04-22 23:15:08.000000','Carcassone','wYarUnIXDlzLjTlR5Fd1zmqXll1w8m.jpg',2,5,'Carcassonne es el juego de mesa moderno para los que quieren empezar con juegos estratégicos de verdad. Con un reglamento sencillo de aprender, cada decisión que toma durante a partida influye en tus posibilidades de ganar. Mediante la colocación de losetas , los jugadores construyen caminos, ciudades y monasterios, y, cuando se acaban las losetas, el jugador que tiene más puntos gana la partida.\n\nEste juego de mesa moderno ganó el premio al mejor juego de año (Spiel des Jahres) en 2001 y desde entonces lleva millones de ejemplares vendidos. Se adapta perfectamente al nivel de cualquier jugador, tanto veterano como nuevo, y cuenta con una mecánica que puede resultar peculiar: ¡no hay tablero al empezar la partida! Mediante la colocación de losetas, los jugadores construyen el «tablero», que resulta diferente en cada partida. \n\nEl reglamento es muy sencillo: en cada turno, un jugador coge una loseta de la caja y la coloca en cualquier sitio donde encaje (un camino junto a otro camino, una muralla de una ciudad al lado de otra loseta de ciudad, etc.). Después, cada jugador dispone de 7 figuras de un color que marcan sus territorios. En el momento en que un jugador coloca una loseta, decide si quieren colocar encima también una de las figuras de su color (que se llaman seguidores). Estos seguidores indican quién podría puntuar sobre esta ciudad, camino o monasterio. Cuando estos territorios se cierran, los jugadores que tiene seguidores encima del territorio puntúan. En el caso de que haya más de un seguidor colocado en una ciudad, el jugador que tiene la mayoría de figuras colocadas dentro de esta ciudad será quien gane los puntos. \n\nEn Carcassonne también puntúan los caminos, pero en este caso solo puede haber un seguidor, aunque es posible que a lo largo de la partida se junten los caminos de dos jugadores. Cuando ocurre esto, al cerrar este camino los dos jugadores obtienen los puntos. Con un monasterio, cuando las losetas cubran todo su contorno, el jugador que tiene un seguidor encima puntúa. Hay que tener cuidado, ya que únicamente al cerrar un camino, ciudad o monasterio se pueden recuperar las fichas. Así pues, a lo largo de la partida hay que tomar decisiones sobre si vale la pena añadir otro seguidor a una ciudad, o si es mejor situarlo en otro sitio donde es posible ganar más puntos.','¡El famoso juego de números para todas las edades! Rummikub Original es el auténtico, el primero y el mejor',30,7,6),('64dd8e48-8290-454c-a88c-e8ab6e68af7e','2024-04-18 19:13:33.933768','2024-04-22 23:15:13.000000','Ciudadelas','E1wAw8AH3snhvO1Dkwxoqy7ead26VZ.png',3,8,'Ciudadelas es un juego de cartas de estrategia en el cual tendremos que construir una ciudad con sus diferentes distritos y conseguir que sea la de mayor esplendor. Para ello, contaremos con la ayuda de personajes, que en cada turno nos proporcionaran sus servicios (comerciando, contando con el apoyo del ejército, el rey o la iglesia, asesinando a tus enemigos, robándoles el oro…), todo vale para crear la mejor Ciudadela.\n\nOcúltate entre las sombras de tu ciudadela para que tus rivales no puedan hacerte perder turnos o dañar tu economía, ya que el jugador con más astucia y picaresca será el que se lleve la victoria en Ciudadelas.\n\nCiudadelas clásico es la versión original del juego. No incluye la expansión ciudadela oscura.\n\nCiudadelas cuenta con muchos premios y nominaciones desde su publicación en el que podemos destacar:  2001 International Gamers Awards - General Strategy.','Trata de construir la mejor ciudad de todas y ser nombrado Maestro Constructor del reino.',40,10,2),('6f947ce5-a16d-41e1-8825-48422f111dd0','2024-04-18 19:31:57.983506','2024-04-22 23:15:18.000000','Terraforming Mars','8XdU1T27LUji3mjyZktHqi2VMx0itV.jpg',1,5,'En el año 2400, la humanidad comienza a terraformar el planeta Marte. Gigantescas corporaciones, patrocinadas por el gobierno mundial de la Tierra, empiezan enormes proyectos para elevar la temperatura, los niveles de oxígeno y la cobertura del planeta por océanos para que el medio ambiente sea habitable. Según avance la terraformación, más y más personas migrarán desde la Tierra para vivir en el planeta rojo. Controla una corporación, juega cartas de proyecto, aumenta tu producción, coloca tus ciudades y áreas verdes sobre el mapa y lucha por los hitos y recompensas. ¿Liderará tu corporación el camino hacia una nueva era de la Humanidad?\n\nEn Terraforming Mars, los jugadores desarrollan el rol de una corporación con un perfil determinado y trabajan juntos en el proceso de terraformación, pero compiten por obtener los puntos de victoria que otorgan no solo tus contribuciones a Marte, sino también las mejoras de la infraestructura humana a través del sistema solar. Al comienzo de cada ronda (llamadas «generaciones»), adquirirán cartas de proyecto únicas (de un mazo con más de 200), mediante las cuales podrán hacer acciones muy variadas: desde introducir nuevas especies de vida vegetal o animal, hasta lanzar asteroides a la superficie marciana, construir ciudades o minar las lunas de Júpiter para extraer valiosos recursos (acero, titanio, energía…). Los Proyectos Estándar también permiten a los jugadores terraformar Marte independientemente de los proyectos que se adquieran.\n\nCuando los parámetros globales (temperatura, oxígeno y océanos) hayan alcanzado el nivel necesario, la terraformación habrá concluido y la partida terminará al finalizar esa generación. Tras contabilizar los puntos de victoria, el jugador con un valor de terraformación más alto ¡será la corporación vencedora!','¡Comienza la domesticación del planeta rojo!',120,12,1),('8e0eb5a1-d746-43ca-9ee0-552c31cb5bf5','2024-05-25 13:49:31.459783','2024-05-25 13:53:48.000000','Los hombres lobo de Castronegro','ElNLvopOjAJS8rfn9fnFneZcAY0IQY.jpg',8,18,'En Hombres Lobo de Castronegro grupos de hasta dieciocho jugadores se convierten en los habitantes del pueblo y colaboran para librarlo de la amenaza de un grupo de malvados hombres lobo. Pero claro, estos seres viles y despiadados se ocultan entre ellos valiéndose durante el día de su forma humana. Por la noche todo es distinto, los humanos están a su merced y no dudan en atacarles. El resultado de todos estos ingredientes es un juego de deducción social con suficientes dosis de intriga, interpretación, faroles y sospechas para que tú y tus amigos no podáis parar de jugarlo. Pero uno de vosotros tiene que ser el narrador, un papel que llevará el peso de la narración y que os guiará por una historia terrible y apasionante.\n\nUn juego de fácil aprendizaje, ideal para pasar un buen rato. ¡Cuidado! Os arriesgáis a estar jugando hora tras hora.','En lo más profundo del bosque, la pequeña aldea de Castronegro es, desde hace algún tiempo, presa de los Hombres Lobo',30,8,2),('913cd26b-1a1a-41dc-883b-a43d2fe13bd4','2024-04-17 19:56:14.516555','2024-04-22 23:15:00.000000','Bang!','PiyS3KRwZi7hor0GQN6IH1qi9EM0a7.jpeg',4,7,'En Bang! todos miran con ansiedad al pistolero, pensando que ya está muerto, que no tiene nada que hacer ante el rifle... ¡Pero lo que no saben es que su pistola es una Volcanic! En el Salvaje Oeste, los Forajidos dan caza al Sheriff, el Sheriff da caza a los Forajidos, y el Renegado urde su plan en secreto, listo para unirse a cualquiera de los bandos. Dentro de poco, ¡las balas comenzarán a zumbar!\n\n¿Cómo se juega a Bang?\n\n-Cada jugador representa a un pistolero en el oeste con un tablero y un personaje con una habilidad.\n-Hay varios roles que se reparten en secreto.\n-Por turnos, se roban 2 cartas del mazo, y se juegan las cartas que se quiera. Las cartas marrones se juegan y se descartan.\n-El Sheriff tiene que acabar con todos, los forajidos tienen que matar al sheriff... \n-Jugando cartas de Bang, quitaremos una vida a ese personaje. La carta cerveza nos permite recuperar una vida...\n-Podemos tener un arma (carta azul) que permite atacar y nos dan algunas ventajas.\n-Ganará el equipo que cumpla su objetivo.','Bang! es un juego de cartas en el que nadie será tu amigo',30,8,2),('9b384cdd-6c0f-4cdd-80b8-9da2af33d498','2024-05-26 00:27:34.972417','2024-05-26 00:27:34.972417','Dixit','5mprynaUsrmTN87UBgej99jfzBGg5A.jpg',2,4,'¿Te imaginas un juego con unas ilustraciones artísticas geniales, donde tienes que ser igual de imaginativo para conseguir que algunos no todos acierten pero no todos pierdan? ¿y si a la vez tienes que ser tan estratega para conseguir los puntos para ganar?\n\nDixit es un juego de mesa para toda la familia donde el jugador principal debe usar la imaginación para sugerir un tema, palabras, frases o historias sobre su carta y los demás jugadores deben intentar engañar a otros jugadores con sus propias cartas.','Dixit es un juego de cartas donde la imaginación y la estrategia del usuario toman el papel principal para ganar el juego',20,5,1),('9bbce502-5e16-43aa-861f-0a6bb618cd6d','2024-04-17 20:53:18.347150','2024-04-22 23:15:26.000000','Gloomhaven','jNLyuxsG3PjPnKCDBINTQ2Cx9OjHBp.jpg',1,4,'¡Bienvenidos a Gloomhaven!\n\nSer un mercenario en la frontera de la civilización no es nada fácil. A aquellos lo suficientemente estúpidos o valientes como para dejar la relativa seguridad de los muros de Gloomhaven, la aventura, la riqueza y la fama les esperan en los bosques salvajes y sombríos, las cuevas nevadas de las montañas y las criptas largo tiempo olvidadas.\n\nSimplemente no esperes que nadie pague por tus servicios por adelantado, porque nadie espera que vuelvas. Gloomhaven es un juego cooperativo de combate táctico en un mundo de fantasía único y en evolución. Asume el papel de un mercenario curtido con sus propios intereses personales.\n\nJuntos, lucharéis a través de una campaña de escenarios que reaccionan y cambian en función de las acciones de los jugadores, creando un exclusivo tipo de juego lleno de tesoros descubiertos, aventureros retirados y opciones permanentes. Cada escenario ofrece a los jugadores decisiones tácticas profundas, donde las cartas de habilidad tienen múltiples usos, y usar la habilidad correcta en el momento adecuado puede significar la diferencia entre el éxito y el fracaso.\n\nGloomhaven ofrece un combate táctico sin dados contra enemigos totalmente automatizados, cada uno con sus propios patrones de comportamiento. En esta caja, los jugadores encontrarán una experiencia de campaña de fantasía totalmente desarrollada de un alcance y profundidad sin precedentes.','Combate táctico en un Mundo de Fantasía único y en evolución',80,14,2),('c0150484-f6e8-4703-b6c6-f196234a488c','2024-04-17 20:49:56.583532','2024-04-22 23:15:31.000000','Pictureka','CdFwt9ocpKNULEwjkZyrW3OHcoXdL6.jpg',2,4,'Divertido y emocionante juego de agilidad visual en el que tendrás que intentar ser el primer jugador en conseguir encontrar un objeto concreto en el tablero de juego. ¡¡Deberás ser rápido y no perderte entre todos los dibujos!! El juego incluye 9 baldosas de juego con distintas imágenes, 55 tarjetas, 1 dado, 1 reloj de arena e instrucciones. Edad recomendada a partir de 6 años. Para 2 o más jugadores.','¡Sé el primero en encontrar los personajes y objetos locos!',30,6,1),('cc28e056-2f3a-4eac-b6b4-0559a9493866','2024-04-18 19:39:33.901477','2024-04-22 23:14:52.000000','Azul (Clásico)','x3Ks1zcUl6RylqVLsXNwwhxrILKXqc.png',2,4,'El juego de mesa Azul es un superventas muy original y visualmente maravilloso. ¡Atrévete a embellecer las paredes del Palacio Real de Évora y consigue las mejores puntuaciones!. Tu tarea en Azul es completar el mosaico de tu tablero individual antes que tu adversario.\n\nAzul es un juego con un componente de azar pero también con un importante factor estratégico a la hora de planificar el orden de colocación de las losetas.','Elabora tu táctica a la hora de colocar los azulejos y no pierdas de vista el tablero de tus adversarios.',30,8,2),('dc6739b8-31df-49c6-b394-17409f1468ee','2024-04-18 19:04:59.749751','2024-04-22 23:14:48.000000','7 Wonders','w15j8OuAbehfoZlOMEOJGfyVnM91lx.jpg',3,7,'En 7 Wonders el azar designa el tablero de la Maravilla con el que vas a jugar, cualquiera te va a gustar, todos tienen unos diseños sublimes, no tendrás preferencia por ninguno.\n\nCon tu Maravilla sobre la mesa, la finalidad es crear una civilización que te haga acumular más puntos de victorias que tus adversarios.\n\nEl recuento se hace al término de cada Era, y el secreto para ganar es tener varias estrategias y utilizar la más efectiva en cada momento. El tiempo empieza a avanzar, estás en la Era I con 7 cartas iniciales y 3 monedas, así que elige una de las cartas, a la vez que el resto de los jugadores, para mejorar tu maravilla, construir una biblioteca o un comercio o ampliar tus recursos.\n\nSi ninguna opción de las anteriores te interesa, siempre puedes descartar la carta a cambio de monedas. ¿El problema es la falta de recursos para progresar? Tienes ciudades vecinas a tu izquierda y a tu derecha, aprovecha sus recursos, puedes comprarles aquellos que tú no generas, no olvides un dato importante: no se pueden negar con la entrega por tu parte de un par de monedas.\n\nConcluye la Era I y es la hora de contar los puntos de cada jugador. Una construcción siempre tiene valor, pero obtendrás más puntuación si tienes más edificios militares que tus vecinos porque recibes más puntos de victoria, si tienes menos, los recibes de derrota. En las Eras II y III la dinámica continúa igual, sólo ten en cuenta que las construcciones se complican, necesitas más recursos y los edificios militares valen más, y ya sabes que la fuerza militar te hace llegar con más puntos de victorias al final.\n\nEl nombre de las cartas están en inglés, aunque no es necesario saber inglés para jugar.','Gobierna una de las siete grandes ciudades del mundo antiguo y deja tu huella en la historia de las civilizaciones.',30,10,2),('f53f497d-567e-48d8-9584-112f84322857','2024-04-13 17:43:50.943677','2024-04-22 23:14:42.000000','Rummikub',NULL,2,4,'¡El famoso juego de números para todas las edades! Rummikub Original es el auténtico, el primero y el mejor Rummikub para iniciarte o regalar a tus amigos y hacerlos fans del más divertido juego de números. Un Rummikub es para toda la vida, es un clásico y por eso es importante la calidad, que las fichas duren siempre, que los colores se distingan y no se apaguen. Ese es el reto de su inventor y el objetivo de Goliath. Jugar es muy sencillo. Coges un grupo de fichas, según los jugadores que participéis, y se trata de hacer grupos de números. Bien un grupo del mismo número pero con distinto color, o bien números consecutivos pero del mismo color, lo que en las cartas se conoce como tríos o escaleras. Lo primero, cada jugador coge 14 fichas del montón común y las coloca en su soporte. Para empezar a hacer tríos o escaleras sobre la mesa, deberás hacer una primera jugada que sume al menos 30 puntos. Esto es, hasta que en tu soporte no tengas tríos o escaleras que sumen 30, no puedes “bajar”. A partir de este momento ya puedes seguir poniendo mas grupos de fichas o bien poner fichas tuyas en grupos que hayan hecho otros. Si no puedes poner ninguna ficha en tu turno, robas una. Y así hasta que consigues quedarte sin fichas en tu soporte. Si lo consigues el primero eres el ganador… ¡enhorabuena! Contenido: 106 fichas (8 conjuntos de fichas numeradas del 1-13 en 4 colores y 2 comodines), 4 soportes + patas de soporte y reglas del juego.','Rummikub es un juego en donde intentas deshacerte de todas tus fichas formando números en series de 3 fichas o más del mismo color o de 3 a 4 de diferente color',60,8,4);
/*!40000 ALTER TABLE `board_game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board_game_categories_bg_category`
--

DROP TABLE IF EXISTS `board_game_categories_bg_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_game_categories_bg_category` (
  `boardGameId` varchar(36) NOT NULL,
  `bgCategoryId` varchar(36) NOT NULL,
  PRIMARY KEY (`boardGameId`,`bgCategoryId`),
  KEY `IDX_890be1cec9ba16d0b86a2e6369` (`boardGameId`),
  KEY `IDX_8019fdf4be688a90b29bbc70ca` (`bgCategoryId`),
  CONSTRAINT `FK_8019fdf4be688a90b29bbc70ca9` FOREIGN KEY (`bgCategoryId`) REFERENCES `bg_category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_890be1cec9ba16d0b86a2e63693` FOREIGN KEY (`boardGameId`) REFERENCES `board_game` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_game_categories_bg_category`
--

LOCK TABLES `board_game_categories_bg_category` WRITE;
/*!40000 ALTER TABLE `board_game_categories_bg_category` DISABLE KEYS */;
INSERT INTO `board_game_categories_bg_category` VALUES ('5140e01e-068b-4b53-b37d-0e7660ed690c','64466833-4089-46b2-9768-6c3566c68bd7'),('5140e01e-068b-4b53-b37d-0e7660ed690c','91cb0380-9bff-4808-bff9-39c73c32d80c'),('5140e01e-068b-4b53-b37d-0e7660ed690c','b242c904-cfe4-4aeb-8bdf-6d6e8ebd8bca'),('5140e01e-068b-4b53-b37d-0e7660ed690c','b27f0948-3cb3-408d-b608-6dab017b6478'),('5fdef89d-a966-4ea8-b168-98d903e24f50','64466833-4089-46b2-9768-6c3566c68bd7'),('5fdef89d-a966-4ea8-b168-98d903e24f50','b27f0948-3cb3-408d-b608-6dab017b6478'),('64dd8e48-8290-454c-a88c-e8ab6e68af7e','91cb0380-9bff-4808-bff9-39c73c32d80c'),('64dd8e48-8290-454c-a88c-e8ab6e68af7e','b27f0948-3cb3-408d-b608-6dab017b6478'),('64dd8e48-8290-454c-a88c-e8ab6e68af7e','be926325-46b7-4ecc-894e-4aaf64a8ba22'),('6f947ce5-a16d-41e1-8825-48422f111dd0','5a702112-2052-48b9-a1ba-85b96d5a251b'),('6f947ce5-a16d-41e1-8825-48422f111dd0','b27f0948-3cb3-408d-b608-6dab017b6478'),('8e0eb5a1-d746-43ca-9ee0-552c31cb5bf5','64466833-4089-46b2-9768-6c3566c68bd7'),('8e0eb5a1-d746-43ca-9ee0-552c31cb5bf5','be926325-46b7-4ecc-894e-4aaf64a8ba22'),('913cd26b-1a1a-41dc-883b-a43d2fe13bd4','b242c904-cfe4-4aeb-8bdf-6d6e8ebd8bca'),('913cd26b-1a1a-41dc-883b-a43d2fe13bd4','b27f0948-3cb3-408d-b608-6dab017b6478'),('913cd26b-1a1a-41dc-883b-a43d2fe13bd4','be926325-46b7-4ecc-894e-4aaf64a8ba22'),('9b384cdd-6c0f-4cdd-80b8-9da2af33d498','64466833-4089-46b2-9768-6c3566c68bd7'),('9b384cdd-6c0f-4cdd-80b8-9da2af33d498','b242c904-cfe4-4aeb-8bdf-6d6e8ebd8bca'),('9bbce502-5e16-43aa-861f-0a6bb618cd6d','1963a99c-0718-450e-882c-5baad798f36e'),('9bbce502-5e16-43aa-861f-0a6bb618cd6d','5a702112-2052-48b9-a1ba-85b96d5a251b'),('9bbce502-5e16-43aa-861f-0a6bb618cd6d','d5e1f91a-1b99-4528-8b18-2c24ccb6ce0a'),('c0150484-f6e8-4703-b6c6-f196234a488c','64466833-4089-46b2-9768-6c3566c68bd7'),('cc28e056-2f3a-4eac-b6b4-0559a9493866','64466833-4089-46b2-9768-6c3566c68bd7'),('cc28e056-2f3a-4eac-b6b4-0559a9493866','91cb0380-9bff-4808-bff9-39c73c32d80c'),('cc28e056-2f3a-4eac-b6b4-0559a9493866','b27f0948-3cb3-408d-b608-6dab017b6478'),('dc6739b8-31df-49c6-b394-17409f1468ee','b242c904-cfe4-4aeb-8bdf-6d6e8ebd8bca'),('dc6739b8-31df-49c6-b394-17409f1468ee','b27f0948-3cb3-408d-b608-6dab017b6478'),('f53f497d-567e-48d8-9584-112f84322857','64466833-4089-46b2-9768-6c3566c68bd7'),('f53f497d-567e-48d8-9584-112f84322857','b242c904-cfe4-4aeb-8bdf-6d6e8ebd8bca'),('f53f497d-567e-48d8-9584-112f84322857','b27f0948-3cb3-408d-b608-6dab017b6478');
/*!40000 ALTER TABLE `board_game_categories_bg_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookable_space`
--

DROP TABLE IF EXISTS `bookable_space`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookable_space` (
  `id` varchar(36) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `capacity` int NOT NULL,
  `spaceNumber` int NOT NULL,
  `left` int NOT NULL,
  `top` int NOT NULL,
  `size` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookable_space`
--

LOCK TABLES `bookable_space` WRITE;
/*!40000 ALTER TABLE `bookable_space` DISABLE KEYS */;
INSERT INTO `bookable_space` VALUES ('07d501e3-3105-4972-169d-424c6f52cc44','2024-04-23 19:00:19.000000','2024-05-05 18:37:22.433896',2,1,13,16,150),('1c22Cf8a-bca7-4dw2-a2fd-94be72140576','2024-04-23 19:00:58.000000','2024-05-05 18:36:59.023466',4,3,24,65,170),('5awef89w-a126-2ca8-b168-92d903e24w16','2024-04-23 19:03:22.000000','2024-05-05 18:37:22.437282',8,2,36,20,265),('f13w497d-327e-48d8-9584-102f14311837','2024-04-23 19:02:16.000000','2024-05-05 18:43:21.482477',6,4,53,75,225);
/*!40000 ALTER TABLE `bookable_space` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `id` varchar(36) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `userId` varchar(36) DEFAULT NULL,
  `bookableSpaceId` varchar(36) DEFAULT NULL,
  `boardGameId` varchar(36) DEFAULT NULL,
  `participants` int NOT NULL,
  `startOf` datetime NOT NULL,
  `endOf` datetime NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Pendiente',
  PRIMARY KEY (`id`),
  KEY `FK_336b3f4a235460dc93645fbf222` (`userId`),
  KEY `FK_bf1181a42c5d3fc8d2567c43e8b` (`boardGameId`),
  KEY `FK_a79cee7ca831405da36a83afa7a` (`bookableSpaceId`),
  CONSTRAINT `FK_336b3f4a235460dc93645fbf222` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_a79cee7ca831405da36a83afa7a` FOREIGN KEY (`bookableSpaceId`) REFERENCES `bookable_space` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_bf1181a42c5d3fc8d2567c43e8b` FOREIGN KEY (`boardGameId`) REFERENCES `board_game` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES ('06ff115e-2605-4c42-a42c-ca10fa8f7299','2024-05-14 20:29:07.328834','2024-05-14 20:29:07.328000','3c98bf8a-bca7-4ff2-a2fd-94be72640571','07d501e3-3105-4972-169d-424c6f52cc44','cc28e056-2f3a-4eac-b6b4-0559a9493866',1,'2024-05-14 18:30:01','2024-05-14 19:00:01','Finalizada'),('2c116531-93b9-4d14-ba14-1f45cc534435','2024-05-15 20:32:34.526188','2024-05-15 20:32:34.526000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','1c22Cf8a-bca7-4dw2-a2fd-94be72140576','5140e01e-068b-4b53-b37d-0e7660ed690c',2,'2024-05-15 20:00:00','2024-05-15 20:30:00','Finalizada'),('2cb078ba-89d8-41e6-849c-10e0f5b2c544','2024-05-11 13:48:23.632780','2024-05-11 13:48:23.632000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','f13w497d-327e-48d8-9584-102f14311837','64dd8e48-8290-454c-a88c-e8ab6e68af7e',3,'2024-05-12 06:00:00','2024-05-12 08:50:00','Finalizada'),('35c20c2d-4d38-4e5a-8864-93ecb715ed0f','2024-05-14 20:34:36.419035','2024-05-14 22:38:07.000000','3c98bf8a-bca7-4ff2-a2fd-94be72640571','1c22Cf8a-bca7-4dw2-a2fd-94be72140576','6f947ce5-a16d-41e1-8825-48422f111dd0',3,'2024-05-14 20:30:01','2024-05-14 21:00:01','Finalizada'),('46253aea-403c-4209-81c3-1930e1ec2e95','2024-05-17 23:59:05.372090','2024-05-17 23:59:05.372000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','5awef89w-a126-2ca8-b168-92d903e24w16','64dd8e48-8290-454c-a88c-e8ab6e68af7e',7,'2024-05-23 08:00:00','2024-05-23 08:30:00','Finalizada'),('474d8c4e-16a8-48df-83dd-a5266bd3d650','2024-05-14 20:33:35.571900','2024-05-14 22:38:07.000000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','5awef89w-a126-2ca8-b168-92d903e24w16','913cd26b-1a1a-41dc-883b-a43d2fe13bd4',1,'2024-05-14 20:30:01','2024-05-14 21:00:01','Finalizada'),('4ac722bf-a2ac-4f6d-b338-afbe6fa723f8','2024-05-17 19:51:17.796912','2024-05-17 20:40:00.000000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','f13w497d-327e-48d8-9584-102f14311837','64dd8e48-8290-454c-a88c-e8ab6e68af7e',5,'2024-05-17 20:10:00','2024-05-17 20:40:00','Finalizada'),('5c71ffd1-7214-4a53-a484-95b06d1800c0','2024-05-15 20:01:28.487531','2024-05-15 20:01:28.487000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','f13w497d-327e-48d8-9584-102f14311837','64dd8e48-8290-454c-a88c-e8ab6e68af7e',4,'2024-05-17 08:00:00','2024-05-17 08:30:00','Finalizada'),('5e4eb08f-ff6a-4e46-9ee1-6a9cf5977633','2024-05-14 23:49:49.300870','2024-05-15 19:14:17.000000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','5awef89w-a126-2ca8-b168-92d903e24w16','913cd26b-1a1a-41dc-883b-a43d2fe13bd4',1,'2024-05-15 08:00:00','2024-05-15 08:30:00','Finalizada'),('631bdcb4-36f8-4293-98d1-fb193fc2959d','2024-05-25 23:34:49.315411','2024-05-25 23:35:16.000000','6675cd33-69c0-4d87-a4db-9b3be9036db2','1c22Cf8a-bca7-4dw2-a2fd-94be72140576','64dd8e48-8290-454c-a88c-e8ab6e68af7e',3,'2024-05-26 08:00:00','2024-05-26 08:30:00','Cancelada'),('63305fdb-7071-43d4-8c32-4fbf4b3756e0','2024-05-25 23:35:47.211508','2024-05-25 23:35:47.211000','6675cd33-69c0-4d87-a4db-9b3be9036db2','07d501e3-3105-4972-169d-424c6f52cc44','8e0eb5a1-d746-43ca-9ee0-552c31cb5bf5',2,'2024-05-26 08:00:00','2024-05-26 08:30:00','Finalizada'),('66a48169-2c40-4ed7-bd6d-f34f126a2275','2024-05-11 13:49:59.784762','2024-05-11 13:49:59.784000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','f13w497d-327e-48d8-9584-102f14311837','64dd8e48-8290-454c-a88c-e8ab6e68af7e',4,'2024-05-14 08:05:00','2024-05-14 08:35:00','Finalizada'),('82071639-f158-4c94-94ea-a291a7c8481d','2024-05-11 11:31:42.008730','2024-05-11 11:32:24.000000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','f13w497d-327e-48d8-9584-102f14311837','5140e01e-068b-4b53-b37d-0e7660ed690c',2,'2024-05-11 20:30:00','2024-05-11 21:00:00','Cancelada'),('946ec9bc-94c7-4220-a3a0-ad9c2b8c44ce','2024-05-10 23:44:22.699433','2024-05-11 00:12:08.000000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','f13w497d-327e-48d8-9584-102f14311837','64dd8e48-8290-454c-a88c-e8ab6e68af7e',5,'2024-05-11 06:00:00','2024-05-11 08:50:00','Cancelada'),('bbc1f985-cd57-443d-8511-8d52134bc4e6','2024-05-14 20:22:18.125049','2024-05-14 20:22:18.125000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','5awef89w-a126-2ca8-b168-92d903e24w16','cc28e056-2f3a-4eac-b6b4-0559a9493866',1,'2024-05-14 18:30:01','2024-05-14 19:00:01','Finalizada'),('c3f5a5ce-4053-4d6c-8069-631c9701dae0','2024-05-18 00:10:25.903498','2024-05-18 00:10:25.903000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','1c22Cf8a-bca7-4dw2-a2fd-94be72140576','6f947ce5-a16d-41e1-8825-48422f111dd0',3,'2024-05-19 10:00:00','2024-05-19 10:30:00','Finalizada'),('d8f73916-55f1-442b-a666-423335ac678a','2024-05-09 19:43:19.555340','2024-05-09 19:43:19.555000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','1c22Cf8a-bca7-4dw2-a2fd-94be72140576','913cd26b-1a1a-41dc-883b-a43d2fe13bd4',2,'2024-05-09 19:45:00','2024-05-09 20:00:00','Finalizada'),('e8d843da-d326-42b4-8afc-d8d0f4ac6a62','2024-05-15 19:59:13.295748','2024-05-15 21:08:41.599000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','5awef89w-a126-2ca8-b168-92d903e24w16','5140e01e-068b-4b53-b37d-0e7660ed690c',2,'2024-05-15 18:30:00','2024-05-15 19:00:00','Finalizada'),('ea03001c-c984-4be6-a261-ce4de494ddab','2024-05-11 13:50:19.802481','2024-05-14 23:52:13.000000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','f13w497d-327e-48d8-9584-102f14311837','9bbce502-5e16-43aa-861f-0a6bb618cd6d',4,'2024-05-16 08:00:00','2024-05-16 08:45:00','Finalizada'),('f36c3fca-967f-43f1-b3a4-1c7a5206fb6f','2024-05-10 19:41:40.580493','2024-05-10 21:03:30.000000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','f13w497d-327e-48d8-9584-102f14311837','cc28e056-2f3a-4eac-b6b4-0559a9493866',4,'2024-05-10 19:45:00','2024-05-10 20:00:00','Finalizada'),('fa5fae25-f190-479d-9980-e36d45d4ef9f','2024-05-11 13:51:34.316138','2024-05-11 13:51:34.316000','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','f13w497d-327e-48d8-9584-102f14311837','64dd8e48-8290-454c-a88c-e8ab6e68af7e',4,'2024-05-20 08:00:00','2024-05-20 08:40:00','Finalizada'),('new','2024-05-25 18:36:39.948169','2024-05-25 18:37:27.000000','3c98bf8a-bca7-4ff2-a2fd-94be72640571','5awef89w-a126-2ca8-b168-92d903e24w16','dc6739b8-31df-49c6-b394-17409f1468ee',1,'2024-05-01 08:00:00','2024-05-01 08:30:00','Finalizada');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suggestion`
--

DROP TABLE IF EXISTS `suggestion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suggestion` (
  `id` varchar(36) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Creada',
  `userId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_bc709ea906afb2315940db65096` (`userId`),
  CONSTRAINT `FK_bc709ea906afb2315940db65096` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suggestion`
--

LOCK TABLES `suggestion` WRITE;
/*!40000 ALTER TABLE `suggestion` DISABLE KEYS */;
INSERT INTO `suggestion` VALUES ('41621d9d-0de4-4bd9-8634-9e642bdb6c1b','2024-05-23 20:24:43.996969','2024-05-25 13:09:17.000000','Cambio de reserva','Necesito que se me modifique la reserva del día 05/06/2024 al día 6, gracias','Aceptada','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea'),('9796ee76-279d-4648-ac65-4e18f8519ae3','2024-05-25 17:46:16.068365','2024-05-25 17:46:16.068365','Correción de descripción de juego: Los hombres lobo de castronegro','El número máximo de jugadores parece incorrecto, ¿lo pueden revisar?','Creada','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea'),('a3bb573c-2caf-4326-b872-46686544b4af','2024-05-26 12:51:51.681583','2024-05-26 12:51:51.681583','Añadir juego:Bang! el juego de dados','Me gustaría que añadiesen la variante del juego Bang! llamada Bang! el juego de dados a su catálogo','Creada','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea'),('b10796b6-a0b5-4e81-827a-61fa40a34601','2024-05-23 20:26:14.198762','2024-05-25 13:44:14.000000','Añadir juego: Splendour','Hola, buenos días, me gustaría que añadiesen el juego Splendour a su catalogo, incluyo un link con más detalles https://zacatrus.es/splendor.html','Denegada','e85db87e-f9ac-4a8b-8470-1a1b5868e5ea');
/*!40000 ALTER TABLE `suggestion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(36) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dni` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('3c98bf8a-bca7-4ff2-a2fd-94be72640571','2024-02-13 20:48:59.148152','2024-04-13 17:20:06.000000','Admin test','admin@gmail.com','12345678A','$2b$10$CRn3KR.cYZa2e3L5zc/RJeq/KnJv57ZDPc1ZKtI/TVhCqlQWKsZoG',1),('6675cd33-69c0-4d87-a4db-9b3be9036db2','2024-05-25 20:20:43.541377','2024-05-25 20:20:43.541377','Paco Hernandez','pGil@outlook.com','12341214A','$2b$10$fq1MYtd6IEav2oCKdfbkVuuhrBCrjKLwl0nxisLltPHmnzyEjNnIu',0),('e85db87e-f9ac-4a8b-8470-1a1b5868e5ea','2024-05-03 20:46:51.405820','2024-05-25 23:31:58.000000','Gabriel Fernández','test@gmail.com','12391173C','$2b$10$9096wLl.Jti/ckPzu8suKuWx6mSKj3lVNLG8sK/KKsYE1TU/bPwoS',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'cfyr'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-26 13:13:42
