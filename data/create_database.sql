BEGIN;

-- Il faut supprimer les tables avant de les créer
DROP TABLE IF EXISTS "names", "adjectives", "verbs", "complements", "cadex" CASCADE;

/* Table liste */
CREATE TABLE "names"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "value" VARCHAR(40) NOT NULL DEFAULT '',
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE "adjectives"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "value" VARCHAR(40) NOT NULL DEFAULT '',
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE "verbs"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "value" VARCHAR(40) NOT NULL DEFAULT '',
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE "complements"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "value" VARCHAR(40) NOT NULL DEFAULT '',
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

/* Seeding */

INSERT INTO "noms" ("value")
VALUES  ( 'un cheval'),
        ('la mairie de Neuilly-sur-Seine'),
        ('une huître'),
        ('Julie Andrieu'),
        ('Jacky et sa Subaru Impreza'),
        ('la gendarmerie hollandaise'),
        ('un chauve'),
        ( 'Simon'),
        ( '2 chatons');

INSERT INTO "adjectives" ("value")
VALUES      ('bien cuit'),
            ('blond'),
            ('guilleret'),
            ('ankylosé'),
            ('blafard'),
            ('rasé de près'),
            ('amputé d un doigt');

INSERT INTO "verbs" ("value")
VALUES      ('consulte'),
             ('franchit'),
             ('cuisine'),
             ('remet en question'),
             ('s immole pour protester contre'),
             ('enduit de confiture'),
             ('instaure'),
             ('déguste');

INSERT INTO "complements" ("value")
VALUES      ('un seau en plastique'),
            ('la consommation de café'),
            ('Yann'),
            ('3 roues de voiture'),
            ('2 mains gauches'),
            ('un skieur débutant'),
            ('la Mer Noire');

CREATE TABLE "cadex"(
    "name_id" INTEGER NOT NULL REFERENCES "noms"("id") ON DELETE CASCADE,
    "adjective_id" INTEGER NOT NULL REFERENCES "adjectives"("id") ON DELETE CASCADE,
    "verb_id" INTEGER NOT NULL REFERENCES "verbs"("id") ON DELETE CASCADE,
    "complement" INTEGER NOT NULL REFERENCES "complements"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

INSERT INTO "cadex" ("name_id","adjective_id", "verb_id", "complement")
VALUES      (1,1,1,1),
            (1,1,1,2);


COMMIT;