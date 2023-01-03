--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE number_guess;
--
-- Name: number_guess; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE number_guess WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE number_guess OWNER TO freecodecamp;

\connect number_guess

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.games (
    game_id integer NOT NULL,
    user_id integer NOT NULL,
    number_of_guesses integer NOT NULL
);


ALTER TABLE public.games OWNER TO freecodecamp;

--
-- Name: games_games_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.games_games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_games_id_seq OWNER TO freecodecamp;

--
-- Name: games_games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.games_games_id_seq OWNED BY public.games.game_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(22) NOT NULL
);


ALTER TABLE public.users OWNER TO freecodecamp;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO freecodecamp;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: games game_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_games_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.games VALUES (108, 108, 162);
INSERT INTO public.games VALUES (109, 108, 234);
INSERT INTO public.games VALUES (110, 110, 395);
INSERT INTO public.games VALUES (111, 110, 135);
INSERT INTO public.games VALUES (112, 108, 359);
INSERT INTO public.games VALUES (113, 108, 594);
INSERT INTO public.games VALUES (114, 108, 595);
INSERT INTO public.games VALUES (115, 108, 758);
INSERT INTO public.games VALUES (116, 116, 404);
INSERT INTO public.games VALUES (117, 116, 564);
INSERT INTO public.games VALUES (118, 118, 214);
INSERT INTO public.games VALUES (119, 118, 217);
INSERT INTO public.games VALUES (120, 116, 517);
INSERT INTO public.games VALUES (121, 116, 987);
INSERT INTO public.games VALUES (122, 116, 988);
INSERT INTO public.games VALUES (123, 116, 678);
INSERT INTO public.games VALUES (124, 124, 391);
INSERT INTO public.games VALUES (125, 124, 445);
INSERT INTO public.games VALUES (126, 126, 945);
INSERT INTO public.games VALUES (127, 126, 827);
INSERT INTO public.games VALUES (128, 124, 975);
INSERT INTO public.games VALUES (129, 124, 840);
INSERT INTO public.games VALUES (130, 124, 841);
INSERT INTO public.games VALUES (131, 124, 106);
INSERT INTO public.games VALUES (132, 132, 438);
INSERT INTO public.games VALUES (133, 132, 742);
INSERT INTO public.games VALUES (134, 134, 768);
INSERT INTO public.games VALUES (135, 134, 484);
INSERT INTO public.games VALUES (136, 132, 922);
INSERT INTO public.games VALUES (137, 132, 220);
INSERT INTO public.games VALUES (138, 132, 221);
INSERT INTO public.games VALUES (139, 132, 304);
INSERT INTO public.games VALUES (140, 140, 627);
INSERT INTO public.games VALUES (141, 140, 688);
INSERT INTO public.games VALUES (142, 142, 341);
INSERT INTO public.games VALUES (143, 142, 885);
INSERT INTO public.games VALUES (144, 140, 692);
INSERT INTO public.games VALUES (145, 140, 965);
INSERT INTO public.games VALUES (146, 140, 966);
INSERT INTO public.games VALUES (147, 140, 242);
INSERT INTO public.games VALUES (148, 148, 310);
INSERT INTO public.games VALUES (149, 148, 549);
INSERT INTO public.games VALUES (150, 150, 858);
INSERT INTO public.games VALUES (151, 150, 456);
INSERT INTO public.games VALUES (152, 148, 75);
INSERT INTO public.games VALUES (153, 148, 307);
INSERT INTO public.games VALUES (154, 148, 308);
INSERT INTO public.games VALUES (155, 148, 349);
INSERT INTO public.games VALUES (156, 156, 948);
INSERT INTO public.games VALUES (157, 156, 987);
INSERT INTO public.games VALUES (158, 158, 678);
INSERT INTO public.games VALUES (159, 158, 903);
INSERT INTO public.games VALUES (160, 156, 835);
INSERT INTO public.games VALUES (161, 156, 888);
INSERT INTO public.games VALUES (162, 156, 889);
INSERT INTO public.games VALUES (163, 156, 141);
INSERT INTO public.games VALUES (164, 164, 167);
INSERT INTO public.games VALUES (165, 164, 831);
INSERT INTO public.games VALUES (166, 166, 41);
INSERT INTO public.games VALUES (167, 166, 334);
INSERT INTO public.games VALUES (168, 164, 324);
INSERT INTO public.games VALUES (169, 164, 513);
INSERT INTO public.games VALUES (170, 164, 514);
INSERT INTO public.games VALUES (171, 164, 860);
INSERT INTO public.games VALUES (172, 172, 112);
INSERT INTO public.games VALUES (173, 172, 599);
INSERT INTO public.games VALUES (174, 174, 103);
INSERT INTO public.games VALUES (175, 174, 893);
INSERT INTO public.games VALUES (176, 172, 988);
INSERT INTO public.games VALUES (177, 172, 371);
INSERT INTO public.games VALUES (178, 172, 372);
INSERT INTO public.games VALUES (179, 172, 860);
INSERT INTO public.games VALUES (180, 180, 38);
INSERT INTO public.games VALUES (181, 180, 970);
INSERT INTO public.games VALUES (182, 182, 460);
INSERT INTO public.games VALUES (183, 182, 968);
INSERT INTO public.games VALUES (184, 180, 993);
INSERT INTO public.games VALUES (185, 180, 233);
INSERT INTO public.games VALUES (186, 180, 234);
INSERT INTO public.games VALUES (187, 180, 433);
INSERT INTO public.games VALUES (188, 188, 647);
INSERT INTO public.games VALUES (189, 188, 136);
INSERT INTO public.games VALUES (190, 190, 565);
INSERT INTO public.games VALUES (191, 190, 340);
INSERT INTO public.games VALUES (192, 188, 86);
INSERT INTO public.games VALUES (193, 188, 741);
INSERT INTO public.games VALUES (194, 188, 742);
INSERT INTO public.games VALUES (195, 188, 514);
INSERT INTO public.games VALUES (196, 196, 353);
INSERT INTO public.games VALUES (197, 196, 871);
INSERT INTO public.games VALUES (198, 198, 886);
INSERT INTO public.games VALUES (199, 198, 155);
INSERT INTO public.games VALUES (200, 196, 870);
INSERT INTO public.games VALUES (201, 196, 757);
INSERT INTO public.games VALUES (202, 196, 758);
INSERT INTO public.games VALUES (203, 196, 920);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.users VALUES (108, 'user_1672682661146');
INSERT INTO public.users VALUES (180, 'user_1672682942491');
INSERT INTO public.users VALUES (110, 'user_1672682661145');
INSERT INTO public.users VALUES (182, 'user_1672682942490');
INSERT INTO public.users VALUES (116, 'user_1672682828271');
INSERT INTO public.users VALUES (118, 'user_1672682828270');
INSERT INTO public.users VALUES (188, 'user_1672682947499');
INSERT INTO public.users VALUES (190, 'user_1672682947498');
INSERT INTO public.users VALUES (124, 'user_1672682842063');
INSERT INTO public.users VALUES (126, 'user_1672682842062');
INSERT INTO public.users VALUES (196, 'user_1672682972472');
INSERT INTO public.users VALUES (132, 'user_1672682853502');
INSERT INTO public.users VALUES (198, 'user_1672682972471');
INSERT INTO public.users VALUES (134, 'user_1672682853501');
INSERT INTO public.users VALUES (140, 'user_1672682857659');
INSERT INTO public.users VALUES (142, 'user_1672682857658');
INSERT INTO public.users VALUES (148, 'user_1672682861489');
INSERT INTO public.users VALUES (150, 'user_1672682861488');
INSERT INTO public.users VALUES (156, 'user_1672682921250');
INSERT INTO public.users VALUES (158, 'user_1672682921249');
INSERT INTO public.users VALUES (164, 'user_1672682926828');
INSERT INTO public.users VALUES (166, 'user_1672682926827');
INSERT INTO public.users VALUES (172, 'user_1672682931690');
INSERT INTO public.users VALUES (174, 'user_1672682931689');


--
-- Name: games_games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.games_games_id_seq', 203, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.users_user_id_seq', 203, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: games games_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--

