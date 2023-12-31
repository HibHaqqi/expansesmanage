PGDMP     '                	    {            db_expansemanage    15.3    15.3 8    :           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ;           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            <           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            =           1262    16471    db_expansemanage    DATABASE     �   CREATE DATABASE db_expansemanage WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
     DROP DATABASE db_expansemanage;
                postgres    false            �            1259    16941    Expanses    TABLE     �   CREATE TABLE public."Expanses" (
    id integer NOT NULL,
    category character varying(255),
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Expanses";
       public         heap    postgres    false            �            1259    16982    ExpansesTransactions    TABLE     y  CREATE TABLE public."ExpansesTransactions" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    wallet_id integer NOT NULL,
    expanses_id integer NOT NULL,
    amount integer,
    date_transaction timestamp with time zone,
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 *   DROP TABLE public."ExpansesTransactions";
       public         heap    postgres    false            �            1259    16981    ExpansesTransactions_id_seq    SEQUENCE     �   CREATE SEQUENCE public."ExpansesTransactions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."ExpansesTransactions_id_seq";
       public          postgres    false    224            >           0    0    ExpansesTransactions_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."ExpansesTransactions_id_seq" OWNED BY public."ExpansesTransactions".id;
          public          postgres    false    223            �            1259    16940    Expanses_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Expanses_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Expanses_id_seq";
       public          postgres    false    216            ?           0    0    Expanses_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Expanses_id_seq" OWNED BY public."Expanses".id;
          public          postgres    false    215            �            1259    17004    IncomeTransactions    TABLE     u  CREATE TABLE public."IncomeTransactions" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    wallet_id integer NOT NULL,
    income_id integer NOT NULL,
    amount integer,
    date_transaction timestamp with time zone,
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 (   DROP TABLE public."IncomeTransactions";
       public         heap    postgres    false            �            1259    17003    IncomeTransactions_id_seq    SEQUENCE     �   CREATE SEQUENCE public."IncomeTransactions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."IncomeTransactions_id_seq";
       public          postgres    false    226            @           0    0    IncomeTransactions_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."IncomeTransactions_id_seq" OWNED BY public."IncomeTransactions".id;
          public          postgres    false    225            �            1259    16973    Incomes    TABLE     �   CREATE TABLE public."Incomes" (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Incomes";
       public         heap    postgres    false            �            1259    16972    Incomes_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Incomes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Incomes_id_seq";
       public          postgres    false    222            A           0    0    Incomes_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Incomes_id_seq" OWNED BY public."Incomes".id;
          public          postgres    false    221            �            1259    16472    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    16950    Users    TABLE     @  CREATE TABLE public."Users" (
    id integer NOT NULL,
    name character varying(255),
    email character varying(255),
    password character varying(255),
    role character varying(255),
    refresh_token text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Users";
       public         heap    postgres    false            �            1259    16949    Users_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Users_id_seq";
       public          postgres    false    218            B           0    0    Users_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;
          public          postgres    false    217            �            1259    16959    Wallets    TABLE       CREATE TABLE public."Wallets" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    category character varying(255),
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Wallets";
       public         heap    postgres    false            �            1259    16958    Wallets_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Wallets_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Wallets_id_seq";
       public          postgres    false    220            C           0    0    Wallets_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Wallets_id_seq" OWNED BY public."Wallets".id;
          public          postgres    false    219            �           2604    16944    Expanses id    DEFAULT     n   ALTER TABLE ONLY public."Expanses" ALTER COLUMN id SET DEFAULT nextval('public."Expanses_id_seq"'::regclass);
 <   ALTER TABLE public."Expanses" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �           2604    16985    ExpansesTransactions id    DEFAULT     �   ALTER TABLE ONLY public."ExpansesTransactions" ALTER COLUMN id SET DEFAULT nextval('public."ExpansesTransactions_id_seq"'::regclass);
 H   ALTER TABLE public."ExpansesTransactions" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            �           2604    17007    IncomeTransactions id    DEFAULT     �   ALTER TABLE ONLY public."IncomeTransactions" ALTER COLUMN id SET DEFAULT nextval('public."IncomeTransactions_id_seq"'::regclass);
 F   ALTER TABLE public."IncomeTransactions" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    16976 
   Incomes id    DEFAULT     l   ALTER TABLE ONLY public."Incomes" ALTER COLUMN id SET DEFAULT nextval('public."Incomes_id_seq"'::regclass);
 ;   ALTER TABLE public."Incomes" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            �           2604    16953    Users id    DEFAULT     h   ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);
 9   ALTER TABLE public."Users" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            �           2604    16962 
   Wallets id    DEFAULT     l   ALTER TABLE ONLY public."Wallets" ALTER COLUMN id SET DEFAULT nextval('public."Wallets_id_seq"'::regclass);
 ;   ALTER TABLE public."Wallets" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            -          0    16941    Expanses 
   TABLE DATA           Y   COPY public."Expanses" (id, category, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   PF       5          0    16982    ExpansesTransactions 
   TABLE DATA           �   COPY public."ExpansesTransactions" (id, user_id, wallet_id, expanses_id, amount, date_transaction, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    224   [G       7          0    17004    IncomeTransactions 
   TABLE DATA           �   COPY public."IncomeTransactions" (id, user_id, wallet_id, income_id, amount, date_transaction, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    226   �L       3          0    16973    Incomes 
   TABLE DATA           T   COPY public."Incomes" (id, name, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    222   �L       +          0    16472    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    214   ;M       /          0    16950    Users 
   TABLE DATA           k   COPY public."Users" (id, name, email, password, role, refresh_token, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   �M       1          0    16959    Wallets 
   TABLE DATA           a   COPY public."Wallets" (id, user_id, category, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   �Q       D           0    0    ExpansesTransactions_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."ExpansesTransactions_id_seq"', 89, true);
          public          postgres    false    223            E           0    0    Expanses_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Expanses_id_seq"', 9, true);
          public          postgres    false    215            F           0    0    IncomeTransactions_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."IncomeTransactions_id_seq"', 1, false);
          public          postgres    false    225            G           0    0    Incomes_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Incomes_id_seq"', 3, true);
          public          postgres    false    221            H           0    0    Users_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Users_id_seq"', 11, true);
          public          postgres    false    217            I           0    0    Wallets_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Wallets_id_seq"', 11, true);
          public          postgres    false    219            �           2606    16987 .   ExpansesTransactions ExpansesTransactions_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."ExpansesTransactions"
    ADD CONSTRAINT "ExpansesTransactions_pkey" PRIMARY KEY (id);
 \   ALTER TABLE ONLY public."ExpansesTransactions" DROP CONSTRAINT "ExpansesTransactions_pkey";
       public            postgres    false    224            �           2606    16948    Expanses Expanses_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Expanses"
    ADD CONSTRAINT "Expanses_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Expanses" DROP CONSTRAINT "Expanses_pkey";
       public            postgres    false    216            �           2606    17009 *   IncomeTransactions IncomeTransactions_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."IncomeTransactions"
    ADD CONSTRAINT "IncomeTransactions_pkey" PRIMARY KEY (id);
 X   ALTER TABLE ONLY public."IncomeTransactions" DROP CONSTRAINT "IncomeTransactions_pkey";
       public            postgres    false    226            �           2606    16980    Incomes Incomes_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Incomes"
    ADD CONSTRAINT "Incomes_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Incomes" DROP CONSTRAINT "Incomes_pkey";
       public            postgres    false    222            �           2606    16476     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    214            �           2606    16957    Users Users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    218            �           2606    16966    Wallets Wallets_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Wallets"
    ADD CONSTRAINT "Wallets_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Wallets" DROP CONSTRAINT "Wallets_pkey";
       public            postgres    false    220            �           2606    16998 :   ExpansesTransactions ExpansesTransactions_expanses_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."ExpansesTransactions"
    ADD CONSTRAINT "ExpansesTransactions_expanses_id_fkey" FOREIGN KEY (expanses_id) REFERENCES public."Expanses"(id);
 h   ALTER TABLE ONLY public."ExpansesTransactions" DROP CONSTRAINT "ExpansesTransactions_expanses_id_fkey";
       public          postgres    false    3211    224    216            �           2606    16988 6   ExpansesTransactions ExpansesTransactions_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."ExpansesTransactions"
    ADD CONSTRAINT "ExpansesTransactions_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON DELETE CASCADE;
 d   ALTER TABLE ONLY public."ExpansesTransactions" DROP CONSTRAINT "ExpansesTransactions_user_id_fkey";
       public          postgres    false    218    3213    224            �           2606    16993 8   ExpansesTransactions ExpansesTransactions_wallet_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."ExpansesTransactions"
    ADD CONSTRAINT "ExpansesTransactions_wallet_id_fkey" FOREIGN KEY (wallet_id) REFERENCES public."Wallets"(id) ON DELETE CASCADE;
 f   ALTER TABLE ONLY public."ExpansesTransactions" DROP CONSTRAINT "ExpansesTransactions_wallet_id_fkey";
       public          postgres    false    220    3215    224            �           2606    17020 4   IncomeTransactions IncomeTransactions_income_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."IncomeTransactions"
    ADD CONSTRAINT "IncomeTransactions_income_id_fkey" FOREIGN KEY (income_id) REFERENCES public."Incomes"(id) ON DELETE CASCADE;
 b   ALTER TABLE ONLY public."IncomeTransactions" DROP CONSTRAINT "IncomeTransactions_income_id_fkey";
       public          postgres    false    222    3217    226            �           2606    17010 2   IncomeTransactions IncomeTransactions_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."IncomeTransactions"
    ADD CONSTRAINT "IncomeTransactions_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON DELETE CASCADE;
 `   ALTER TABLE ONLY public."IncomeTransactions" DROP CONSTRAINT "IncomeTransactions_user_id_fkey";
       public          postgres    false    218    226    3213            �           2606    17015 4   IncomeTransactions IncomeTransactions_wallet_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."IncomeTransactions"
    ADD CONSTRAINT "IncomeTransactions_wallet_id_fkey" FOREIGN KEY (wallet_id) REFERENCES public."Wallets"(id) ON DELETE CASCADE;
 b   ALTER TABLE ONLY public."IncomeTransactions" DROP CONSTRAINT "IncomeTransactions_wallet_id_fkey";
       public          postgres    false    226    220    3215            �           2606    16967    Wallets Wallets_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Wallets"
    ADD CONSTRAINT "Wallets_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public."Wallets" DROP CONSTRAINT "Wallets_user_id_fkey";
       public          postgres    false    3213    218    220            -   �   x���=O�0���+<�@�|���hL0��5�������q�*$/�-KϽ'���u������@3	�e^V��^U�b{��uQ�n��?_Y	gaMbȃ��PcȆ�O]`�
�x��G2�m{th�L#v��^c6�p�Z���=<ۙ|X����Iy�pTB��Dwo;��ǯ��'�+��O������L�a{��]���{8�KX
��/�YL-@�%����DC�If�S;��β�:���      5   (  x����r�6����=e���¼Cn�ͅ�]Oƚ�g��� ))ٌ��~��@ohP4������7�&�Ãv'�����M��ϯ/���?N��N�G2�%e�[��N���]�j�}ʄ]���E&o	�a��\$pF�F0�h�F����UĮ���g��o��r�6���M-����$�C�HP#��=�~��r]��U\���F�I}���ȗ?�>��A����H�K�Ѐ�&�Q�������h.����$�.���Fw��f�-#0�s�.uE�;��g�����SL���`X��o�M
`���� �����3(�0�GD�B�?��7���)����P.�`���r��@��x���N��r1v�t)�j����$��,5�R���I�v݈:+lZ~� ����ڏm1ըB�Ķ��ܚ�\榻�����m��RZj�4���Bj .���K@a.����FL	bug��/���L��;��%0K�o�)y؇&5K	ubۤ����t>=>���rbj��U��K���v��n�N秷�/O5J��J��Y�{s���I����ubņ3�����;9�Ǟ�ߟ
݌��
]1L������<�fF��e"���,e���� wSz�lG�>�Mߦ��W����1�'9�1J�V��-]	L����mc���*�����n#�	��*��]	��4�q��˨��8���F��冦]��I`m�G���}�86��R1F�&���?oZI`�:��B�M�,)W9�e�`�rֶ�ذ݉�V'J�xJ�
?���(�V��};))��E#�m�������6}n��k_���6W����L�a>ǖ���SD�~�ءU�����=@��4���w�47��i�MK�%`w��	j./k��ބ�T����Lд͞;G�l� �h����Cd�H-\/CǶN�7�^)�K�|c`�d��]�Q�vM��3���������u:���[��!4G`)��Ŕ-^4e%��g������-T��X�[��ۍL:��K��~�N�Hy���_'l%���މ{��������S�^��N,r	<vRJ�;�OA����3	|/a�c3���k��y�=6��r���x{���j�%���e��T��U2d��r�2���xw�iD��n�ZQqdV6ԇL%���-ȇ|�}���aF�a'yr	|< ��N.AXk�2wb	����zK�$x��;r	µf�_��/W�FcT���-� �#xjV_J��p������(�3����s?�%�� �?��'�      7      x������ � �      3   {   x�3�N�I,�����+�ȩT��K��M�4202�5��54Q02�24�2��346�6��#�e�	Ԟ�W�Y��锟WZ����!�L��Ɯ�%�E�� R�(�,5�4U���(51�>|F��qqq �M;�      +   j   x�e�;� D{����.6�l�A0���k���xof$H���}&W�ӹ�X���0�5�c�rK >�p!P��=G�Vj�B����5��|�S�l��]��I0�.!KBA      /     x���K��X�5�
��4��V��"h*����*"
���&���f3	!��˓�\>�kӉ���d��FX�%����C)���<~����n;�����O����c����'������vOZT��f�0��L�2�ca�����L�МN��*-c|Ic���J��J�;�r|��E��W.�Y:9�0�v��%�����)@��ƈ���f5�[]Z��|��X&M�i��F�t\"fu��Ѥ�#��R^�Npߡ��<�*�O��,]�$��!="��@��	���� -��H�ñ}�S��;!odE^^g#��~�Z�� ���([~�g��&���JJ�⊢	m�-���n��=�T'<�/�Ux�~��/� 8��=E8=D��6�FJL�ɫ��z�u֨C[YfW]���ܨ�{8E(H\�T\�+E�'�0P��g�ػ>��ӍE]ޟMv�Ve3���q�8�i���uǅaUQ~XFcMg%I:���������#EH��P��K����W\8�l!��6%���nWeD�0�
7g78���$d�'b��ny��wD��@P���pn�W����]�t�S˷�]�%���,$��/���4���Ə}�?
R>�q�+Ê�'8H��#�汯<K����3egDH57�2�Ԓo�}~��V=�7)�����cPYٗ<�}�h��"\�q���vD��m3���ʻ���r�c�����*??t85���hxS���������{�9�4�W�M9]�!!cՆ\D�*A8V#g�B�Ie9�z.ca�t���t"-U�T?��B��S�C����<,�^ll�{�I���LB�u1�g�%���UWv{��@f7�؟OUX��k9�"E��e!�3�C��������R`
S2��K6�_�9��n&��q�s�Wz�1?�ć~��Ve�g���ѹ1f��c���F�Ӧ=��(U�്�Ͳi�`�Lߨ����iY�Vc9u�^����U
"��>oo�y�(�}8���� ��E;      1   #  x����j�0Eך�оX��a�ڹ-�E�2�`7�K��庤~BA�3s�D�X��᛼|,��VoU[��}T�p��6��{���L�T	f��\���
4w����03]ډԪI��b�'��!�9�r4�d,+�ӓ��ەCFY����	I��Sꥍw������bRF�ԭ�.���0��ޠPV�F,#d��R��Lhc��1�{b��������c����:��	�3���&�u�A4�n��A�u��8F�X<��\�$��yL��ⓦv �y2��     