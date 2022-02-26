import { Continent, AreaNodeCategory, AreaNodeType } from "./types";

export const nodeCategories: AreaNodeCategory[] = [
  {
    name: "Collectibles",
    color: "rgba(200, 200, 200, 0.7)",
    types: [
      {
        name: "Collectible Card",
        iconUrl: "/markers/card-joker.svg",
      },
      {
        name: "Mokoko Seed",
        iconUrl: "/markers/plant-seed.svg",
      },
    ],
  },
  {
    name: "Enemies",
    color: "rgba(220, 20, 60, 0.7)",
    types: [
      {
        name: "Boss",
        iconUrl: "/markers/daemon-skull.svg",
      },
      {
        name: "World Boss",
        iconUrl: "/markers/gooey-daemon.svg",
      },
    ],
  },
  {
    name: "Locations",
    color: "rgba(112, 128, 144, 0.7)",
    types: [
      {
        name: "Dungeon",
        iconUrl: "/markers/dungeon-gate.svg",
      },
      {
        name: "Triport",
        iconUrl: "/markers/moebius-triangle.svg",
      },
      {
        name: "Portal",
        iconUrl: "/markers/portal.svg",
      },
      {
        name: "Chaosportal",
        iconUrl: "/markers/magic-portal.svg",
      },
    ],
  },
  {
    name: "Services",
    color: "rgba(34, 139, 34, 0.7)",
    types: [
      {
        name: "Chef",
        iconUrl: "/markers/chef-toque.svg",
      },
    ],
  },
  {
    name: "Miscellaneous",
    color: "rgba(134, 87, 229, 0.7)",
    types: [
      {
        name: "Play Song",
        iconUrl: "/markers/double-quaver.svg",
      },
      {
        name: "Vista",
        iconUrl: "/markers/spyglass.svg",
      },
    ],
  },
];

export const nodeTypes = nodeCategories
  .map((nodeCategory) =>
    nodeCategory.types.map<AreaNodeType>((nodeType) => ({
      ...nodeType,
      category: nodeCategory.name,
      color: nodeType.color || nodeCategory.color,
    }))
  )
  .flat();

export const nodeTypesMap = nodeTypes.reduce(
  (prev, nodeType) => ({
    ...prev,
    [nodeType.name]: nodeType,
  }),
  {} as {
    [name: string]: AreaNodeType;
  }
);

export const continents: Continent[] = [
  {
    "name": "Trixion",
    "areas": [
      {
        "name": "Trixion",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/trixion/lv_trision_ps_0_{y}x{x}.webp",
            "full": "/tiles/trixion/lv_trision_ps_0_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/trixion/lv_trision_ark_ps_0_{y}x{x}.webp",
            "full": "/tiles/trixion/lv_trision_ark_ps_0_full.webp",
            "max": [
              3,
              2
            ]
          }
        ]
      },
      {
        "name": "Trixion Training Grounds",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/trixion_training_grounds/lv_trision_ark_ps_0_{y}x{x}.webp",
            "full": "/tiles/trixion_training_grounds/lv_trision_ark_ps_0_full.webp",
            "max": [
              3,
              2
            ]
          }
        ]
      },
      {
        "name": "Training Room",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/training_room/lv_rvr_ruinarena_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/training_room/lv_rvr_ruinarena_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Sailing Voyage",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/sailing_voyage/lv_ocn_world_ps_0_{y}x{x}.webp",
            "full": "/tiles/sailing_voyage/lv_ocn_world_ps_0_full.webp",
            "max": [
              8,
              11
            ]
          }
        ]
      },
      {
        "name": "Training Area",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/training_area/lv_guidingrm_ps_0_{y}x{x}.webp",
            "full": "/tiles/training_area/lv_guidingrm_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Sailing Voyage",
    "areas": [
      {
        "name": "Dark Chaos Gate",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/dark_chaos_gate/lv_ocn_gship_fav_ps_0_{y}x{x}.webp",
            "full": "/tiles/dark_chaos_gate/lv_ocn_gship_fav_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "[Open Seas] Sea of Gienah",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/open_seas_sea_of_gienah/lv_ocn_world_ps_0_{y}x{x}.webp",
            "full": "/tiles/open_seas_sea_of_gienah/lv_ocn_world_ps_0_full.webp",
            "max": [
              8,
              11
            ]
          }
        ]
      },
      {
        "name": "[Open Seas] Sea of Procyon",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/open_seas_sea_of_procyon/lv_ocn_world_ps_0_{y}x{x}.webp",
            "full": "/tiles/open_seas_sea_of_procyon/lv_ocn_world_ps_0_full.webp",
            "max": [
              8,
              11
            ]
          }
        ]
      },
      {
        "name": "Somewhere in the vast sea",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/somewhere_in_the_vast_sea/lv_ocn_world_ps_0_{y}x{x}.webp",
            "full": "/tiles/somewhere_in_the_vast_sea/lv_ocn_world_ps_0_full.webp",
            "max": [
              8,
              11
            ]
          }
        ]
      },
      {
        "name": "Secret Dungeon",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/secret_dungeon/lv_scd_voyage_ps_0_{y}x{x}.webp",
            "full": "/tiles/secret_dungeon/lv_scd_voyage_ps_0_full.webp",
            "max": [
              4,
              6
            ]
          }
        ]
      },
      {
        "name": "Goblin Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/goblin_island/lv_ocn_roundis_ps_0_{y}x{x}.webp",
            "full": "/tiles/goblin_island/lv_ocn_roundis_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Giant Mushroom Island",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/giant_mushroom_island/lv_ocn_mushroomis_ps_1_{y}x{x}.webp",
            "full": "/tiles/giant_mushroom_island/lv_ocn_mushroomis_ps_1_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 2,
            "url": "/tiles/giant_mushroom_island/lv_ocn_mushroomis_ps_2_{y}x{x}.webp",
            "full": "/tiles/giant_mushroom_island/lv_ocn_mushroomis_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/giant_mushroom_island/lv_ocn_mushroomis_ps_3_{y}x{x}.webp",
            "full": "/tiles/giant_mushroom_island/lv_ocn_mushroomis_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Toto Silver Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/toto_silver_island/lv_ocn_totosilveris_ps_0_{y}x{x}.webp",
            "full": "/tiles/toto_silver_island/lv_ocn_totosilveris_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 1,
            "url": "/tiles/toto_silver_island/lv_ocn_totosilveris_ps_1_{y}x{x}.webp",
            "full": "/tiles/toto_silver_island/lv_ocn_totosilveris_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 2,
            "url": "/tiles/toto_silver_island/lv_ocn_totosilveris_ps_2_{y}x{x}.webp",
            "full": "/tiles/toto_silver_island/lv_ocn_totosilveris_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Totopia",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/totopia/lv_ocn_totopia_ps_0_{y}x{x}.webp",
            "full": "/tiles/totopia/lv_ocn_totopia_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/totopia/lv_ocn_totopia_ps_3_{y}x{x}.webp",
            "full": "/tiles/totopia/lv_ocn_totopia_ps_3_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Illusion Isle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/illusion_isle/lv_ocn_illusionis_ps_0_{y}x{x}.webp",
            "full": "/tiles/illusion_isle/lv_ocn_illusionis_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Lullaby Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/lullaby_island/lv_ocn_sleepingis_ps_0_{y}x{x}.webp",
            "full": "/tiles/lullaby_island/lv_ocn_sleepingis_ps_0_full.webp",
            "max": [
              4,
              5
            ]
          },
          {
            "id": 3,
            "url": "/tiles/lullaby_island/lv_ocn_sleepingis_ps_3_{y}x{x}.webp",
            "full": "/tiles/lullaby_island/lv_ocn_sleepingis_ps_3_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Starlight Isle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/starlight_isle/lv_ocn_starlightis_ps_0_{y}x{x}.webp",
            "full": "/tiles/starlight_isle/lv_ocn_starlightis_ps_0_full.webp",
            "max": [
              7,
              7
            ]
          },
          {
            "id": 1,
            "url": "/tiles/starlight_isle/lv_ocn_starlightis_ps_1_{y}x{x}.webp",
            "full": "/tiles/starlight_isle/lv_ocn_starlightis_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/starlight_isle/lv_ocn_starlightis_ps_3_{y}x{x}.webp",
            "full": "/tiles/starlight_isle/lv_ocn_starlightis_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 14,
            "url": "/tiles/starlight_isle/lv_ocn_starlightis_ps_14_{y}x{x}.webp",
            "full": "/tiles/starlight_isle/lv_ocn_starlightis_ps_14_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 15,
            "url": "/tiles/starlight_isle/lv_ocn_starlightis_ps_15_{y}x{x}.webp",
            "full": "/tiles/starlight_isle/lv_ocn_starlightis_ps_15_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 16,
            "url": "/tiles/starlight_isle/lv_ocn_starlightis_ps_16_{y}x{x}.webp",
            "full": "/tiles/starlight_isle/lv_ocn_starlightis_ps_16_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 17,
            "url": "/tiles/starlight_isle/lv_ocn_starlightis_ps_17_{y}x{x}.webp",
            "full": "/tiles/starlight_isle/lv_ocn_starlightis_ps_17_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Island of Time",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/island_of_time/lv_ocn_timeis_ps_0_{y}x{x}.webp",
            "full": "/tiles/island_of_time/lv_ocn_timeis_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/island_of_time/lv_ocn_timeis_ps_1_{y}x{x}.webp",
            "full": "/tiles/island_of_time/lv_ocn_timeis_ps_1_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Volare Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/volare_island/lv_ocn_volareis_ps_0_{y}x{x}.webp",
            "full": "/tiles/volare_island/lv_ocn_volareis_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Tooki Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/tooki_island/lv_ocn_dookyis_ps_0_{y}x{x}.webp",
            "full": "/tiles/tooki_island/lv_ocn_dookyis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Isle of Yearning",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/isle_of_yearning/lv_ocn_longingis_ps_0_{y}x{x}.webp",
            "full": "/tiles/isle_of_yearning/lv_ocn_longingis_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/isle_of_yearning/lv_ocn_longingis_ps_1_{y}x{x}.webp",
            "full": "/tiles/isle_of_yearning/lv_ocn_longingis_ps_1_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 6,
            "url": "/tiles/isle_of_yearning/lv_ocn_longingis_ps_6_{y}x{x}.webp",
            "full": "/tiles/isle_of_yearning/lv_ocn_longingis_ps_6_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Facility X-301",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/facility_x-301/lv_ocn_secretbaseis_ps_0_{y}x{x}.webp",
            "full": "/tiles/facility_x-301/lv_ocn_secretbaseis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/facility_x-301/lv_ocn_secretbaseis_ps_1_{y}x{x}.webp",
            "full": "/tiles/facility_x-301/lv_ocn_secretbaseis_ps_1_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 2,
            "url": "/tiles/facility_x-301/lv_ocn_secretbaseis_ps_2_{y}x{x}.webp",
            "full": "/tiles/facility_x-301/lv_ocn_secretbaseis_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 3,
            "url": "/tiles/facility_x-301/lv_ocn_secretbaseis_ps_3_{y}x{x}.webp",
            "full": "/tiles/facility_x-301/lv_ocn_secretbaseis_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Alteisen",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/alteisen/lv_ocn_alteisen_ps_0_{y}x{x}.webp",
            "full": "/tiles/alteisen/lv_ocn_alteisen_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/alteisen/lv_ocn_alteisen_ps_2_{y}x{x}.webp",
            "full": "/tiles/alteisen/lv_ocn_alteisen_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Meteora",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/meteora/lv_ocn_meteora_ps_2_{y}x{x}.webp",
            "full": "/tiles/meteora/lv_ocn_meteora_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Kalthertz",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/kalthertz/lv_ocn_kalthertz_ps_1_{y}x{x}.webp",
            "full": "/tiles/kalthertz/lv_ocn_kalthertz_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Island of Mist",
        "tiles": [
          {
            "id": 3,
            "url": "/tiles/island_of_mist/lv_ocn_mistis_ps_3_{y}x{x}.webp",
            "full": "/tiles/island_of_mist/lv_ocn_mistis_ps_3_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Argon",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/argon/lv_ocn_elpisis_ps_1_{y}x{x}.webp",
            "full": "/tiles/argon/lv_ocn_elpisis_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Frostfire Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/frostfire_island/lv_ocn_icefireis_ps_0_{y}x{x}.webp",
            "full": "/tiles/frostfire_island/lv_ocn_icefireis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Aiwana Island",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/aiwana_island/lv_ocn_bikiniis_ps_1_{y}x{x}.webp",
            "full": "/tiles/aiwana_island/lv_ocn_bikiniis_ps_1_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Fortuna",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/fortuna/lv_ocn_fortunais_ps_0_{y}x{x}.webp",
            "full": "/tiles/fortuna/lv_ocn_fortunais_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Vairgrys's Nest",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/vairgryss_nest/lv_ocn_evergraceis_ps_0_{y}x{x}.webp",
            "full": "/tiles/vairgryss_nest/lv_ocn_evergraceis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Spida Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/spida_island/lv_ocn_spidais_ps_0_{y}x{x}.webp",
            "full": "/tiles/spida_island/lv_ocn_spidais_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 4,
            "url": "/tiles/spida_island/lv_ocn_spidais_ps_4_{y}x{x}.webp",
            "full": "/tiles/spida_island/lv_ocn_spidais_ps_4_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Mercia",
        "tiles": [
          {
            "id": 5,
            "url": "/tiles/mercia/lv_ocn_merciais_ps_5_{y}x{x}.webp",
            "full": "/tiles/mercia/lv_ocn_merciais_ps_5_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Reminiscence Isle",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/reminiscence_isle/lv_ocn_recallis_ps_1_{y}x{x}.webp",
            "full": "/tiles/reminiscence_isle/lv_ocn_recallis_ps_1_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Forpe",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/forpe/lv_ocn_forpeis_ps_0_{y}x{x}.webp",
            "full": "/tiles/forpe/lv_ocn_forpeis_ps_0_full.webp",
            "max": [
              2,
              1
            ]
          },
          {
            "id": 2,
            "url": "/tiles/forpe/lv_ocn_forpeis_ps_2_{y}x{x}.webp",
            "full": "/tiles/forpe/lv_ocn_forpeis_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 3,
            "url": "/tiles/forpe/lv_ocn_forpeis_ps_3_{y}x{x}.webp",
            "full": "/tiles/forpe/lv_ocn_forpeis_ps_3_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/forpe/lv_ocn_forpeis_ps_4_{y}x{x}.webp",
            "full": "/tiles/forpe/lv_ocn_forpeis_ps_4_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/forpe/lv_ocn_forpeis_ps_5_{y}x{x}.webp",
            "full": "/tiles/forpe/lv_ocn_forpeis_ps_5_full.webp",
            "max": [
              1,
              2
            ]
          }
        ]
      },
      {
        "name": "Peyto",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/peyto/lv_ocn_peyto_ps_0_{y}x{x}.webp",
            "full": "/tiles/peyto/lv_ocn_peyto_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/peyto/lv_ocn_peyto_ps_1_{y}x{x}.webp",
            "full": "/tiles/peyto/lv_ocn_peyto_ps_1_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/peyto/lv_ocn_peyto_ps_2_{y}x{x}.webp",
            "full": "/tiles/peyto/lv_ocn_peyto_ps_2_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 3,
            "url": "/tiles/peyto/lv_ocn_peyto_ps_3_{y}x{x}.webp",
            "full": "/tiles/peyto/lv_ocn_peyto_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/peyto/lv_ocn_peyto_ps_4_{y}x{x}.webp",
            "full": "/tiles/peyto/lv_ocn_peyto_ps_4_full.webp",
            "max": [
              10,
              10
            ]
          },
          {
            "id": 5,
            "url": "/tiles/peyto/lv_ocn_peyto_ps_5_{y}x{x}.webp",
            "full": "/tiles/peyto/lv_ocn_peyto_ps_5_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 6,
            "url": "/tiles/peyto/lv_ocn_peyto_ps_6_{y}x{x}.webp",
            "full": "/tiles/peyto/lv_ocn_peyto_ps_6_full.webp",
            "max": [
              4,
              2
            ]
          }
        ]
      },
      {
        "name": "Lost City",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/lost_city/lv_ocn_forgottenis_ps_0_{y}x{x}.webp",
            "full": "/tiles/lost_city/lv_ocn_forgottenis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Blackfang's Den",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/blackfangs_den/lv_ocn_blackteethis_ps_0_{y}x{x}.webp",
            "full": "/tiles/blackfangs_den/lv_ocn_blackteethis_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/blackfangs_den/lv_ocn_blackteethis_ps_1_{y}x{x}.webp",
            "full": "/tiles/blackfangs_den/lv_ocn_blackteethis_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/blackfangs_den/lv_ocn_blackteethis_fav_ps_0_{y}x{x}.webp",
            "full": "/tiles/blackfangs_den/lv_ocn_blackteethis_fav_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Gravis",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/gravis/lv_ocn_gravis_ps_0_{y}x{x}.webp",
            "full": "/tiles/gravis/lv_ocn_gravis_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 7,
            "url": "/tiles/gravis/lv_ocn_gravis_ps_7_{y}x{x}.webp",
            "full": "/tiles/gravis/lv_ocn_gravis_ps_7_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Opher, the Lonely Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/opher_the_lonely_island/lv_ocn_opher_ps_0_{y}x{x}.webp",
            "full": "/tiles/opher_the_lonely_island/lv_ocn_opher_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 3,
            "url": "/tiles/opher_the_lonely_island/lv_ocn_opher_ps_3_{y}x{x}.webp",
            "full": "/tiles/opher_the_lonely_island/lv_ocn_opher_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Sunflower Island",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/sunflower_island/lv_ocn_sunfloweris_ps_2_{y}x{x}.webp",
            "full": "/tiles/sunflower_island/lv_ocn_sunfloweris_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Freedom Isle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/freedom_isle/lv_ocn_freedomis_ps_0_{y}x{x}.webp",
            "full": "/tiles/freedom_isle/lv_ocn_freedomis_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/freedom_isle/lv_ocn_freedomis_ps_1_{y}x{x}.webp",
            "full": "/tiles/freedom_isle/lv_ocn_freedomis_ps_1_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 2,
            "url": "/tiles/freedom_isle/lv_ocn_freedomis_ps_2_{y}x{x}.webp",
            "full": "/tiles/freedom_isle/lv_ocn_freedomis_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 3,
            "url": "/tiles/freedom_isle/lv_ocn_freedomis_ps_3_{y}x{x}.webp",
            "full": "/tiles/freedom_isle/lv_ocn_freedomis_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/freedom_isle/lv_ocn_freedomis_ps_4_{y}x{x}.webp",
            "full": "/tiles/freedom_isle/lv_ocn_freedomis_ps_4_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Kharmine's Lair",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/kharmines_lair/lv_ocn_camainis_ps_1_{y}x{x}.webp",
            "full": "/tiles/kharmines_lair/lv_ocn_camainis_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Oblivion Isle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/oblivion_isle/lv_ocn_deathvalley_ps_0_{y}x{x}.webp",
            "full": "/tiles/oblivion_isle/lv_ocn_deathvalley_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Little Luck Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/little_luck_island/lv_ocn_valtisland_ps_0_{y}x{x}.webp",
            "full": "/tiles/little_luck_island/lv_ocn_valtisland_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Distorted Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/distorted_island/lv_ocn_distortedis_ps_0_{y}x{x}.webp",
            "full": "/tiles/distorted_island/lv_ocn_distortedis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/distorted_island/lv_ocn_distortedis_ps_1_{y}x{x}.webp",
            "full": "/tiles/distorted_island/lv_ocn_distortedis_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 10,
            "url": "/tiles/distorted_island/lv_ocn_distortedis_ps_10_{y}x{x}.webp",
            "full": "/tiles/distorted_island/lv_ocn_distortedis_ps_10_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Erasmo's Island",
        "tiles": [
          {
            "id": 3,
            "url": "/tiles/erasmos_island/lv_ocn_erasmois_ps_3_{y}x{x}.webp",
            "full": "/tiles/erasmos_island/lv_ocn_erasmois_ps_3_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Fomona Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/fomona_island/lv_ocn_fomonais_ps_0_{y}x{x}.webp",
            "full": "/tiles/fomona_island/lv_ocn_fomonais_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Runaways Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/runaways_island/lv_ocn_runawaysis_ps_0_{y}x{x}.webp",
            "full": "/tiles/runaways_island/lv_ocn_runawaysis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/runaways_island/lv_ocn_runawaysis_ps_1_{y}x{x}.webp",
            "full": "/tiles/runaways_island/lv_ocn_runawaysis_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Medeia",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/medeia/lv_ocn_medeiais_ps_0_{y}x{x}.webp",
            "full": "/tiles/medeia/lv_ocn_medeiais_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Liebeheim",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/liebeheim/lv_ocn_liebeheimis_ps_1_{y}x{x}.webp",
            "full": "/tiles/liebeheim/lv_ocn_liebeheimis_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Lush Reed Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/lush_reed_island/lv_ocn_lushreedis_ps_0_{y}x{x}.webp",
            "full": "/tiles/lush_reed_island/lv_ocn_lushreedis_ps_0_full.webp",
            "max": [
              2,
              4
            ]
          }
        ]
      },
      {
        "name": "Metus Islands",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/metus_islands/lv_ocn_fearis_ps_0_{y}x{x}.webp",
            "full": "/tiles/metus_islands/lv_ocn_fearis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/metus_islands/lv_ocn_fearis_ps_1_{y}x{x}.webp",
            "full": "/tiles/metus_islands/lv_ocn_fearis_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Atlas",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/atlas/lv_ocn_nautilusis_ps_0_{y}x{x}.webp",
            "full": "/tiles/atlas/lv_ocn_nautilusis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Wisdom Isle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_0_{y}x{x}.webp",
            "full": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_1_{y}x{x}.webp",
            "full": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 2,
            "url": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_2_{y}x{x}.webp",
            "full": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_2_full.webp",
            "max": [
              4,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_3_{y}x{x}.webp",
            "full": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 10,
            "url": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_10_{y}x{x}.webp",
            "full": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_10_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 11,
            "url": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_11_{y}x{x}.webp",
            "full": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_11_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 12,
            "url": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_12_{y}x{x}.webp",
            "full": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_12_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 13,
            "url": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_13_{y}x{x}.webp",
            "full": "/tiles/wisdom_isle/lv_ocn_wisdomis_ps_13_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Crescent Isle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/crescent_isle/lv_ocn_crescentis_ps_0_{y}x{x}.webp",
            "full": "/tiles/crescent_isle/lv_ocn_crescentis_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Serenity Isle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/serenity_isle/lv_ocn_sereneis_ps_0_{y}x{x}.webp",
            "full": "/tiles/serenity_isle/lv_ocn_sereneis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "White Wave Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/white_wave_island/lv_ocn_levalis_ps_0_{y}x{x}.webp",
            "full": "/tiles/white_wave_island/lv_ocn_levalis_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Outlaw Isle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/outlaw_isle/lv_ocn_narris_ps_0_{y}x{x}.webp",
            "full": "/tiles/outlaw_isle/lv_ocn_narris_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Wildwater Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/wildwater_island/lv_ocn_tronais_ps_0_{y}x{x}.webp",
            "full": "/tiles/wildwater_island/lv_ocn_tronais_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Naruni Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/naruni_island/lv_ocn_naruniis_ps_0_{y}x{x}.webp",
            "full": "/tiles/naruni_island/lv_ocn_naruniis_ps_0_full.webp",
            "max": [
              3,
              4
            ]
          }
        ]
      },
      {
        "name": "Niheltalop's Thoughts",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/niheltalops_thoughts/lv_ocn_ancientris_ps_0_{y}x{x}.webp",
            "full": "/tiles/niheltalops_thoughts/lv_ocn_ancientris_ps_0_full.webp",
            "max": [
              5,
              5
            ]
          }
        ]
      },
      {
        "name": "Notos Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/notos_island/lv_ocn_icebergis_ps_0_{y}x{x}.webp",
            "full": "/tiles/notos_island/lv_ocn_icebergis_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Monte Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/monte_island/lv_ocn_monteis_ps_0_{y}x{x}.webp",
            "full": "/tiles/monte_island/lv_ocn_monteis_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/monte_island/lv_ocn_monteis_ps_1_{y}x{x}.webp",
            "full": "/tiles/monte_island/lv_ocn_monteis_ps_1_full.webp",
            "max": [
              8,
              8
            ]
          },
          {
            "id": 2,
            "url": "/tiles/monte_island/lv_ocn_monteis_ps_2_{y}x{x}.webp",
            "full": "/tiles/monte_island/lv_ocn_monteis_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/monte_island/lv_ocn_monteis_ps_3_{y}x{x}.webp",
            "full": "/tiles/monte_island/lv_ocn_monteis_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/monte_island/lv_ocn_monteis_ps_4_{y}x{x}.webp",
            "full": "/tiles/monte_island/lv_ocn_monteis_ps_4_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/monte_island/lv_ocn_monteis_ps_5_{y}x{x}.webp",
            "full": "/tiles/monte_island/lv_ocn_monteis_ps_5_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 6,
            "url": "/tiles/monte_island/lv_ocn_monteis_ps_6_{y}x{x}.webp",
            "full": "/tiles/monte_island/lv_ocn_monteis_ps_6_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 7,
            "url": "/tiles/monte_island/lv_ocn_monteis_ps_7_{y}x{x}.webp",
            "full": "/tiles/monte_island/lv_ocn_monteis_ps_7_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 8,
            "url": "/tiles/monte_island/lv_ocn_monteis_ps_8_{y}x{x}.webp",
            "full": "/tiles/monte_island/lv_ocn_monteis_ps_8_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 9,
            "url": "/tiles/monte_island/lv_ocn_monteis_ps_9_{y}x{x}.webp",
            "full": "/tiles/monte_island/lv_ocn_monteis_ps_9_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 10,
            "url": "/tiles/monte_island/lv_ocn_monteis_ps_10_{y}x{x}.webp",
            "full": "/tiles/monte_island/lv_ocn_monteis_ps_10_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 11,
            "url": "/tiles/monte_island/lv_ocn_monteis_ps_11_{y}x{x}.webp",
            "full": "/tiles/monte_island/lv_ocn_monteis_ps_11_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 12,
            "url": "/tiles/monte_island/lv_ocn_monteis_ps_12_{y}x{x}.webp",
            "full": "/tiles/monte_island/lv_ocn_monteis_ps_12_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 13,
            "url": "/tiles/monte_island/lv_ocn_monteis_ps_13_{y}x{x}.webp",
            "full": "/tiles/monte_island/lv_ocn_monteis_ps_13_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Panda Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/panda_island/lv_ocn_pandapupuis_ps_0_{y}x{x}.webp",
            "full": "/tiles/panda_island/lv_ocn_pandapupuis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/panda_island/lv_ocn_pandapupuis_ps_1_{y}x{x}.webp",
            "full": "/tiles/panda_island/lv_ocn_pandapupuis_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/panda_island/lv_ocn_pandapupuis_ps_2_{y}x{x}.webp",
            "full": "/tiles/panda_island/lv_ocn_pandapupuis_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Fantasm Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/fantasm_island/lv_ocn_fantasyis_ps_0_{y}x{x}.webp",
            "full": "/tiles/fantasm_island/lv_ocn_fantasyis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/fantasm_island/lv_ocn_fantasyis_ps_1_{y}x{x}.webp",
            "full": "/tiles/fantasm_island/lv_ocn_fantasyis_ps_1_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 2,
            "url": "/tiles/fantasm_island/lv_ocn_fantasyis_ps_2_{y}x{x}.webp",
            "full": "/tiles/fantasm_island/lv_ocn_fantasyis_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Harmony Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/harmony_island/lv_ocn_harmonyis_ps_0_{y}x{x}.webp",
            "full": "/tiles/harmony_island/lv_ocn_harmonyis_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Dreamgull Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/dreamgull_island/lv_ocn_dgullis_ps_0_{y}x{x}.webp",
            "full": "/tiles/dreamgull_island/lv_ocn_dgullis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Glacier Isle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/glacier_isle/lv_ocn_islandbgis_ps_0_{y}x{x}.webp",
            "full": "/tiles/glacier_isle/lv_ocn_islandbgis_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Lagoon Island",
        "tiles": [
          {
            "id": 4,
            "url": "/tiles/lagoon_island/lv_ocn_bhislandis_ps_4_{y}x{x}.webp",
            "full": "/tiles/lagoon_island/lv_ocn_bhislandis_ps_4_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/lagoon_island/lv_ocn_bhislandis_ps_5_{y}x{x}.webp",
            "full": "/tiles/lagoon_island/lv_ocn_bhislandis_ps_5_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 6,
            "url": "/tiles/lagoon_island/lv_ocn_bhislandis_ps_6_{y}x{x}.webp",
            "full": "/tiles/lagoon_island/lv_ocn_bhislandis_ps_6_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Turtle Island",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/turtle_island/lv_ocn_ttislandis_ps_1_{y}x{x}.webp",
            "full": "/tiles/turtle_island/lv_ocn_ttislandis_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Hope Island",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/hope_island/lv_ocn_islandofis_ps_2_{y}x{x}.webp",
            "full": "/tiles/hope_island/lv_ocn_islandofis_ps_2_full.webp",
            "max": [
              4,
              5
            ]
          }
        ]
      },
      {
        "name": "Lopang Island",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/lopang_island/lv_ocn_loislandis_ps_1_{y}x{x}.webp",
            "full": "/tiles/lopang_island/lv_ocn_loislandis_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 6,
            "url": "/tiles/lopang_island/lv_ocn_loislandis_ps_6_{y}x{x}.webp",
            "full": "/tiles/lopang_island/lv_ocn_loislandis_ps_6_full.webp",
            "max": [
              5,
              5
            ]
          },
          {
            "id": 8,
            "url": "/tiles/lopang_island/lv_ocn_loislandis_ps_8_{y}x{x}.webp",
            "full": "/tiles/lopang_island/lv_ocn_loislandis_ps_8_full.webp",
            "max": [
              5,
              5
            ]
          },
          {
            "id": 10,
            "url": "/tiles/lopang_island/lv_ocn_loislandis_ps_10_{y}x{x}.webp",
            "full": "/tiles/lopang_island/lv_ocn_loislandis_ps_10_full.webp",
            "max": [
              4,
              5
            ]
          }
        ]
      },
      {
        "name": "Eternity Isle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/eternity_isle/lv_ocn_brokengis_ps_0_{y}x{x}.webp",
            "full": "/tiles/eternity_isle/lv_ocn_brokengis_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/eternity_isle/lv_ocn_brokengis_ps_1_{y}x{x}.webp",
            "full": "/tiles/eternity_isle/lv_ocn_brokengis_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 2,
            "url": "/tiles/eternity_isle/lv_ocn_brokengis_ps_2_{y}x{x}.webp",
            "full": "/tiles/eternity_isle/lv_ocn_brokengis_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Hypnos's Eyes",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/hypnoss_eyes/lv_ocn_ehypnosis_ps_0_{y}x{x}.webp",
            "full": "/tiles/hypnoss_eyes/lv_ocn_ehypnosis_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/hypnoss_eyes/lv_ocn_ehypnosis_ps_1_{y}x{x}.webp",
            "full": "/tiles/hypnoss_eyes/lv_ocn_ehypnosis_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/hypnoss_eyes/lv_ocn_ehypnosis_ps_2_{y}x{x}.webp",
            "full": "/tiles/hypnoss_eyes/lv_ocn_ehypnosis_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/hypnoss_eyes/lv_ocn_ehypnosis_ps_3_{y}x{x}.webp",
            "full": "/tiles/hypnoss_eyes/lv_ocn_ehypnosis_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 6,
            "url": "/tiles/hypnoss_eyes/lv_ocn_ehypnosis_ps_6_{y}x{x}.webp",
            "full": "/tiles/hypnoss_eyes/lv_ocn_ehypnosis_ps_6_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 7,
            "url": "/tiles/hypnoss_eyes/lv_ocn_ehypnosis_ps_7_{y}x{x}.webp",
            "full": "/tiles/hypnoss_eyes/lv_ocn_ehypnosis_ps_7_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/hypnoss_eyes/lv_ocn_ehypnosid_ps_0_{y}x{x}.webp",
            "full": "/tiles/hypnoss_eyes/lv_ocn_ehypnosid_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Sublime Isle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/sublime_isle/lv_ocn_atalanteis_ps_0_{y}x{x}.webp",
            "full": "/tiles/sublime_isle/lv_ocn_atalanteis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 2,
            "url": "/tiles/sublime_isle/lv_ocn_atalanteis_ps_2_{y}x{x}.webp",
            "full": "/tiles/sublime_isle/lv_ocn_atalanteis_ps_2_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Death's Hold Island",
        "tiles": [
          {
            "id": 3,
            "url": "/tiles/deaths_hold_island/lv_ocn_desireis_ps_3_{y}x{x}.webp",
            "full": "/tiles/deaths_hold_island/lv_ocn_desireis_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Orvis Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/orvis_island/lv_ocn_orbisis_ps_0_{y}x{x}.webp",
            "full": "/tiles/orvis_island/lv_ocn_orbisis_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/orvis_island/lv_ocn_orbisis_ps_1_{y}x{x}.webp",
            "full": "/tiles/orvis_island/lv_ocn_orbisis_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/orvis_island/lv_ocn_orbisis_ps_2_{y}x{x}.webp",
            "full": "/tiles/orvis_island/lv_ocn_orbisis_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Astella",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/astella/lv_ocn_estis_ps_0_{y}x{x}.webp",
            "full": "/tiles/astella/lv_ocn_estis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Slime Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/slime_island/lv_ocn_slimeis_ps_0_{y}x{x}.webp",
            "full": "/tiles/slime_island/lv_ocn_slimeis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/slime_island/lv_ocn_slimeis_ps_1_{y}x{x}.webp",
            "full": "/tiles/slime_island/lv_ocn_slimeis_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/slime_island/lv_ocn_slimeis_ps_2_{y}x{x}.webp",
            "full": "/tiles/slime_island/lv_ocn_slimeis_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Alakkir",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/alakkir/lv_ocn_alacis_ps_1_{y}x{x}.webp",
            "full": "/tiles/alakkir/lv_ocn_alacis_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 3,
            "url": "/tiles/alakkir/lv_ocn_alacis_ps_3_{y}x{x}.webp",
            "full": "/tiles/alakkir/lv_ocn_alacis_ps_3_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Opportunity Isle",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/opportunity_isle/lv_ocn_chanceis_ps_1_{y}x{x}.webp",
            "full": "/tiles/opportunity_isle/lv_ocn_chanceis_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Primal Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/primal_island/lv_ocn_beginningis_ps_0_{y}x{x}.webp",
            "full": "/tiles/primal_island/lv_ocn_beginningis_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 11,
            "url": "/tiles/primal_island/lv_ocn_beginningis_ps_11_{y}x{x}.webp",
            "full": "/tiles/primal_island/lv_ocn_beginningis_ps_11_full.webp",
            "max": [
              5,
              5
            ]
          }
        ]
      },
      {
        "name": "Golden Wave Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/golden_wave_island/lv_ocn_goldenwis_ps_0_{y}x{x}.webp",
            "full": "/tiles/golden_wave_island/lv_ocn_goldenwis_ps_0_full.webp",
            "max": [
              3,
              2
            ]
          }
        ]
      },
      {
        "name": "Boombling Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/boombling_island/lv_ocn_bombis_ps_0_{y}x{x}.webp",
            "full": "/tiles/boombling_island/lv_ocn_bombis_ps_0_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/boombling_island/lv_ocn_bombis_ps_1_{y}x{x}.webp",
            "full": "/tiles/boombling_island/lv_ocn_bombis_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 7,
            "url": "/tiles/boombling_island/lv_ocn_bombis_ps_7_{y}x{x}.webp",
            "full": "/tiles/boombling_island/lv_ocn_bombis_ps_7_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 8,
            "url": "/tiles/boombling_island/lv_ocn_bombis_ps_8_{y}x{x}.webp",
            "full": "/tiles/boombling_island/lv_ocn_bombis_ps_8_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Tranquil Isle",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/tranquil_isle/lv_ocn_sabbathis_ps_1_{y}x{x}.webp",
            "full": "/tiles/tranquil_isle/lv_ocn_sabbathis_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Revelry Row",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/revelry_row/lv_ocn_avenueis_ps_0_{y}x{x}.webp",
            "full": "/tiles/revelry_row/lv_ocn_avenueis_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/revelry_row/lv_ocn_avenueis_ps_4_{y}x{x}.webp",
            "full": "/tiles/revelry_row/lv_ocn_avenueis_ps_4_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Asura Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/asura_island/lv_ocn_surais_ps_0_{y}x{x}.webp",
            "full": "/tiles/asura_island/lv_ocn_surais_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Promise Isle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/promise_isle/lv_ocn_promiseis_ps_0_{y}x{x}.webp",
            "full": "/tiles/promise_isle/lv_ocn_promiseis_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Twilight Isle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/twilight_isle/lv_ocn_twilightis_ps_0_{y}x{x}.webp",
            "full": "/tiles/twilight_isle/lv_ocn_twilightis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/twilight_isle/lv_ocn_twilightis_ps_1_{y}x{x}.webp",
            "full": "/tiles/twilight_isle/lv_ocn_twilightis_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 2,
            "url": "/tiles/twilight_isle/lv_ocn_twilightis_ps_2_{y}x{x}.webp",
            "full": "/tiles/twilight_isle/lv_ocn_twilightis_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Phantomwing Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/phantomwing_island/lv_ocn_butterflyis_ps_0_{y}x{x}.webp",
            "full": "/tiles/phantomwing_island/lv_ocn_butterflyis_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/phantomwing_island/lv_ocn_butterflyis_ps_2_{y}x{x}.webp",
            "full": "/tiles/phantomwing_island/lv_ocn_butterflyis_ps_2_full.webp",
            "max": [
              1,
              2
            ]
          }
        ]
      },
      {
        "name": "Azure Wind Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/azure_wind_island/lv_ocn_blueis_ps_0_{y}x{x}.webp",
            "full": "/tiles/azure_wind_island/lv_ocn_blueis_ps_0_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/azure_wind_island/lv_ocn_blueis_ps_1_{y}x{x}.webp",
            "full": "/tiles/azure_wind_island/lv_ocn_blueis_ps_1_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 2,
            "url": "/tiles/azure_wind_island/lv_ocn_blueis_ps_2_{y}x{x}.webp",
            "full": "/tiles/azure_wind_island/lv_ocn_blueis_ps_2_full.webp",
            "max": [
              5,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/azure_wind_island/lv_ocn_blueis_ps_3_{y}x{x}.webp",
            "full": "/tiles/azure_wind_island/lv_ocn_blueis_ps_3_full.webp",
            "max": [
              3,
              4
            ]
          },
          {
            "id": 4,
            "url": "/tiles/azure_wind_island/lv_ocn_blueis_ps_4_{y}x{x}.webp",
            "full": "/tiles/azure_wind_island/lv_ocn_blueis_ps_4_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 5,
            "url": "/tiles/azure_wind_island/lv_ocn_blueis_ps_5_{y}x{x}.webp",
            "full": "/tiles/azure_wind_island/lv_ocn_blueis_ps_5_full.webp",
            "max": [
              5,
              2
            ]
          },
          {
            "id": 6,
            "url": "/tiles/azure_wind_island/lv_ocn_blueis_ps_6_{y}x{x}.webp",
            "full": "/tiles/azure_wind_island/lv_ocn_blueis_ps_6_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Shadowmoon Market",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/shadowmoon_market/lv_ocn_shadowis_ps_0_{y}x{x}.webp",
            "full": "/tiles/shadowmoon_market/lv_ocn_shadowis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/shadowmoon_market/lv_ocn_shadowis_ps_1_{y}x{x}.webp",
            "full": "/tiles/shadowmoon_market/lv_ocn_shadowis_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/shadowmoon_market/lv_ocn_shadowis_ps_2_{y}x{x}.webp",
            "full": "/tiles/shadowmoon_market/lv_ocn_shadowis_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/shadowmoon_market/lv_ocn_shadowis_ps_3_{y}x{x}.webp",
            "full": "/tiles/shadowmoon_market/lv_ocn_shadowis_ps_3_full.webp",
            "max": [
              5,
              3
            ]
          },
          {
            "id": 4,
            "url": "/tiles/shadowmoon_market/lv_ocn_shadowis_ps_4_{y}x{x}.webp",
            "full": "/tiles/shadowmoon_market/lv_ocn_shadowis_ps_4_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/shadowmoon_market/lv_ocn_shadowis_ps_5_{y}x{x}.webp",
            "full": "/tiles/shadowmoon_market/lv_ocn_shadowis_ps_5_full.webp",
            "max": [
              3,
              6
            ]
          },
          {
            "id": 6,
            "url": "/tiles/shadowmoon_market/lv_ocn_shadowis_ps_6_{y}x{x}.webp",
            "full": "/tiles/shadowmoon_market/lv_ocn_shadowis_ps_6_full.webp",
            "max": [
              5,
              3
            ]
          }
        ]
      },
      {
        "name": "Shangra",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/shangra/lv_ocn_shangis_ps_0_{y}x{x}.webp",
            "full": "/tiles/shangra/lv_ocn_shangis_ps_0_full.webp",
            "max": [
              5,
              4
            ]
          },
          {
            "id": 1,
            "url": "/tiles/shangra/lv_ocn_shangis_ps_1_{y}x{x}.webp",
            "full": "/tiles/shangra/lv_ocn_shangis_ps_1_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 2,
            "url": "/tiles/shangra/lv_ocn_shangis_ps_2_{y}x{x}.webp",
            "full": "/tiles/shangra/lv_ocn_shangis_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 3,
            "url": "/tiles/shangra/lv_ocn_shangis_ps_3_{y}x{x}.webp",
            "full": "/tiles/shangra/lv_ocn_shangis_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/shangra/lv_ocn_shangis_ps_4_{y}x{x}.webp",
            "full": "/tiles/shangra/lv_ocn_shangis_ps_4_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/shangra/lv_ocn_shangis_ps_5_{y}x{x}.webp",
            "full": "/tiles/shangra/lv_ocn_shangis_ps_5_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 6,
            "url": "/tiles/shangra/lv_ocn_shangis_ps_6_{y}x{x}.webp",
            "full": "/tiles/shangra/lv_ocn_shangis_ps_6_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 7,
            "url": "/tiles/shangra/lv_ocn_shangis_ps_7_{y}x{x}.webp",
            "full": "/tiles/shangra/lv_ocn_shangis_ps_7_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 8,
            "url": "/tiles/shangra/lv_ocn_shangis_ps_8_{y}x{x}.webp",
            "full": "/tiles/shangra/lv_ocn_shangis_ps_8_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 9,
            "url": "/tiles/shangra/lv_ocn_shangis_ps_9_{y}x{x}.webp",
            "full": "/tiles/shangra/lv_ocn_shangis_ps_9_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 10,
            "url": "/tiles/shangra/lv_ocn_shangis_ps_10_{y}x{x}.webp",
            "full": "/tiles/shangra/lv_ocn_shangis_ps_10_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 11,
            "url": "/tiles/shangra/lv_ocn_shangis_ps_11_{y}x{x}.webp",
            "full": "/tiles/shangra/lv_ocn_shangis_ps_11_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Atropos",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/atropos/lv_ocn_atrois_ps_0_{y}x{x}.webp",
            "full": "/tiles/atropos/lv_ocn_atrois_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 1,
            "url": "/tiles/atropos/lv_ocn_atrois_ps_1_{y}x{x}.webp",
            "full": "/tiles/atropos/lv_ocn_atrois_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/atropos/lv_ocn_atrois_ps_2_{y}x{x}.webp",
            "full": "/tiles/atropos/lv_ocn_atrois_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/atropos/lv_ocn_atrois_ps_3_{y}x{x}.webp",
            "full": "/tiles/atropos/lv_ocn_atrois_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/atropos/lv_ocn_atrois_ps_4_{y}x{x}.webp",
            "full": "/tiles/atropos/lv_ocn_atrois_ps_4_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/atropos/lv_ocn_atrois_ps_5_{y}x{x}.webp",
            "full": "/tiles/atropos/lv_ocn_atrois_ps_5_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 6,
            "url": "/tiles/atropos/lv_ocn_atrois_ps_6_{y}x{x}.webp",
            "full": "/tiles/atropos/lv_ocn_atrois_ps_6_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Walpurgis",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/walpurgis/lv_ocn_walsis_ps_2_{y}x{x}.webp",
            "full": "/tiles/walpurgis/lv_ocn_walsis_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Unknown Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/unknown_island/lv_ocn_unknownis_ps_0_{y}x{x}.webp",
            "full": "/tiles/unknown_island/lv_ocn_unknownis_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Gesbroy",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_0_{y}x{x}.webp",
            "full": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_1_{y}x{x}.webp",
            "full": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_2_{y}x{x}.webp",
            "full": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_3_{y}x{x}.webp",
            "full": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_4_{y}x{x}.webp",
            "full": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_4_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_5_{y}x{x}.webp",
            "full": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_5_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 6,
            "url": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_6_{y}x{x}.webp",
            "full": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_6_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 7,
            "url": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_7_{y}x{x}.webp",
            "full": "/tiles/gesbroy/lv_ocn_zysbrauis_ps_7_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Land of Truth",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/land_of_truth/lv_ocn_bugis_ps_0_{y}x{x}.webp",
            "full": "/tiles/land_of_truth/lv_ocn_bugis_ps_0_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/land_of_truth/lv_ocn_bugis_ps_1_{y}x{x}.webp",
            "full": "/tiles/land_of_truth/lv_ocn_bugis_ps_1_full.webp",
            "max": [
              5,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/land_of_truth/lv_ocn_bugis_ps_2_{y}x{x}.webp",
            "full": "/tiles/land_of_truth/lv_ocn_bugis_ps_2_full.webp",
            "max": [
              10,
              4
            ]
          },
          {
            "id": 3,
            "url": "/tiles/land_of_truth/lv_ocn_bugis_ps_3_{y}x{x}.webp",
            "full": "/tiles/land_of_truth/lv_ocn_bugis_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/land_of_truth/lv_ocn_bugis_ps_4_{y}x{x}.webp",
            "full": "/tiles/land_of_truth/lv_ocn_bugis_ps_4_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/land_of_truth/lv_ocn_bugis_ps_5_{y}x{x}.webp",
            "full": "/tiles/land_of_truth/lv_ocn_bugis_ps_5_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 6,
            "url": "/tiles/land_of_truth/lv_ocn_bugis_ps_6_{y}x{x}.webp",
            "full": "/tiles/land_of_truth/lv_ocn_bugis_ps_6_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 7,
            "url": "/tiles/land_of_truth/lv_ocn_bugis_ps_7_{y}x{x}.webp",
            "full": "/tiles/land_of_truth/lv_ocn_bugis_ps_7_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 8,
            "url": "/tiles/land_of_truth/lv_ocn_bugis_ps_8_{y}x{x}.webp",
            "full": "/tiles/land_of_truth/lv_ocn_bugis_ps_8_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 9,
            "url": "/tiles/land_of_truth/lv_ocn_bugis_ps_9_{y}x{x}.webp",
            "full": "/tiles/land_of_truth/lv_ocn_bugis_ps_9_full.webp",
            "max": [
              4,
              2
            ]
          },
          {
            "id": 10,
            "url": "/tiles/land_of_truth/lv_ocn_bugis_ps_10_{y}x{x}.webp",
            "full": "/tiles/land_of_truth/lv_ocn_bugis_ps_10_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 11,
            "url": "/tiles/land_of_truth/lv_ocn_bugis_ps_11_{y}x{x}.webp",
            "full": "/tiles/land_of_truth/lv_ocn_bugis_ps_11_full.webp",
            "max": [
              3,
              1
            ]
          },
          {
            "id": 12,
            "url": "/tiles/land_of_truth/lv_ocn_bugis_ps_12_{y}x{x}.webp",
            "full": "/tiles/land_of_truth/lv_ocn_bugis_ps_12_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 13,
            "url": "/tiles/land_of_truth/lv_ocn_bugis_ps_13_{y}x{x}.webp",
            "full": "/tiles/land_of_truth/lv_ocn_bugis_ps_13_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 14,
            "url": "/tiles/land_of_truth/lv_ocn_bugis_ps_14_{y}x{x}.webp",
            "full": "/tiles/land_of_truth/lv_ocn_bugis_ps_14_full.webp",
            "max": [
              4,
              2
            ]
          }
        ]
      },
      {
        "name": "Tooki Corporation",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/tooki_corporation/lv_ocn_dookypkis_ps_0_{y}x{x}.webp",
            "full": "/tiles/tooki_corporation/lv_ocn_dookypkis_ps_0_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/tooki_corporation/lv_ocn_dookypkis_ps_1_{y}x{x}.webp",
            "full": "/tiles/tooki_corporation/lv_ocn_dookypkis_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/tooki_corporation/lv_ocn_dookypkis_ps_3_{y}x{x}.webp",
            "full": "/tiles/tooki_corporation/lv_ocn_dookypkis_ps_3_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Whispering Islet",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/whispering_islet/lv_ocn_whisperis_ps_0_{y}x{x}.webp",
            "full": "/tiles/whispering_islet/lv_ocn_whisperis_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 2,
            "url": "/tiles/whispering_islet/lv_ocn_whisperis_ps_2_{y}x{x}.webp",
            "full": "/tiles/whispering_islet/lv_ocn_whisperis_ps_2_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Anguished Isle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/anguished_isle/lv_ocn_griefis_ps_0_{y}x{x}.webp",
            "full": "/tiles/anguished_isle/lv_ocn_griefis_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Drumbeat Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/drumbeat_island/lv_ocn_bumbadumis_ps_0_{y}x{x}.webp",
            "full": "/tiles/drumbeat_island/lv_ocn_bumbadumis_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/drumbeat_island/lv_ocn_bumbadumis_ps_2_{y}x{x}.webp",
            "full": "/tiles/drumbeat_island/lv_ocn_bumbadumis_ps_2_full.webp",
            "max": [
              1,
              2
            ]
          }
        ]
      },
      {
        "name": "Snowpang Island",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/snowpang_island/lv_ocn_snowpis_ps_1_{y}x{x}.webp",
            "full": "/tiles/snowpang_island/lv_ocn_snowpis_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Past Hidden by Mikeel",
        "tiles": [
          {
            "id": 3,
            "url": "/tiles/past_hidden_by_mikeel/lv_ocn_recallid_ps_3_{y}x{x}.webp",
            "full": "/tiles/past_hidden_by_mikeel/lv_ocn_recallid_ps_3_full.webp",
            "max": [
              1,
              2
            ]
          }
        ]
      },
      {
        "name": "Werner's Grand Manor",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/werners_grand_manor/lv_ocn_fearid_ps_0_{y}x{x}.webp",
            "full": "/tiles/werners_grand_manor/lv_ocn_fearid_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/werners_grand_manor/lv_ocn_fearid_ps_1_{y}x{x}.webp",
            "full": "/tiles/werners_grand_manor/lv_ocn_fearid_ps_1_full.webp",
            "max": [
              6,
              9
            ]
          },
          {
            "id": 2,
            "url": "/tiles/werners_grand_manor/lv_ocn_fearid_ps_2_{y}x{x}.webp",
            "full": "/tiles/werners_grand_manor/lv_ocn_fearid_ps_2_full.webp",
            "max": [
              5,
              4
            ]
          },
          {
            "id": 3,
            "url": "/tiles/werners_grand_manor/lv_ocn_fearid_ps_3_{y}x{x}.webp",
            "full": "/tiles/werners_grand_manor/lv_ocn_fearid_ps_3_full.webp",
            "max": [
              2,
              4
            ]
          }
        ]
      },
      {
        "name": "Shadow Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/shadow_island/lv_ocn_rippedl_ps_0_{y}x{x}.webp",
            "full": "/tiles/shadow_island/lv_ocn_rippedl_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/shadow_island/lv_ocn_rippedl_ps_1_{y}x{x}.webp",
            "full": "/tiles/shadow_island/lv_ocn_rippedl_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Secret Laboratory",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/secret_laboratory/lv_ocn_brokengid_ps_0_{y}x{x}.webp",
            "full": "/tiles/secret_laboratory/lv_ocn_brokengid_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Sacrificial Altar",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/sacrificial_altar/lv_ocn_desireid_ps_2_{y}x{x}.webp",
            "full": "/tiles/sacrificial_altar/lv_ocn_desireid_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Twilight Chapel",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/twilight_chapel/lv_ocn_twilightid_ps_1_{y}x{x}.webp",
            "full": "/tiles/twilight_chapel/lv_ocn_twilightid_ps_1_full.webp",
            "max": [
              5,
              5
            ]
          }
        ]
      },
      {
        "name": "Night of Walpurgis",
        "tiles": [
          {
            "id": 7,
            "url": "/tiles/night_of_walpurgis/lv_ocn_walsnaid_ps_7_{y}x{x}.webp",
            "full": "/tiles/night_of_walpurgis/lv_ocn_walsnaid_ps_7_full.webp",
            "max": [
              4,
              5
            ]
          }
        ]
      },
      {
        "name": "Arena of Blood Low",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/arena_of_blood_low/lv_ocn_suraid_ps_0_{y}x{x}.webp",
            "full": "/tiles/arena_of_blood_low/lv_ocn_suraid_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Garden of Despair",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/garden_of_despair/lv_ocn_griefisid_ps_0_{y}x{x}.webp",
            "full": "/tiles/garden_of_despair/lv_ocn_griefisid_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Rohendel",
    "areas": [
      {
        "name": "Rothun",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/rothun/lv_rhd_loa_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/rothun/lv_rhd_loa_t_ps_0_full.webp",
            "max": [
              3,
              4
            ]
          },
          {
            "id": 1,
            "url": "/tiles/rothun/lv_rhd_loa_t_ps_1_{y}x{x}.webp",
            "full": "/tiles/rothun/lv_rhd_loa_t_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 2,
            "url": "/tiles/rothun/lv_rhd_loa_t_ps_2_{y}x{x}.webp",
            "full": "/tiles/rothun/lv_rhd_loa_t_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 3,
            "url": "/tiles/rothun/lv_rhd_loa_t_ps_3_{y}x{x}.webp",
            "full": "/tiles/rothun/lv_rhd_loa_t_ps_3_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 4,
            "url": "/tiles/rothun/lv_rhd_loa_t_ps_4_{y}x{x}.webp",
            "full": "/tiles/rothun/lv_rhd_loa_t_ps_4_full.webp",
            "max": [
              4,
              3
            ]
          },
          {
            "id": 5,
            "url": "/tiles/rothun/lv_rhd_loa_t_ps_5_{y}x{x}.webp",
            "full": "/tiles/rothun/lv_rhd_loa_t_ps_5_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 6,
            "url": "/tiles/rothun/lv_rhd_loa_t_ps_6_{y}x{x}.webp",
            "full": "/tiles/rothun/lv_rhd_loa_t_ps_6_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 7,
            "url": "/tiles/rothun/lv_rhd_loa_t_ps_7_{y}x{x}.webp",
            "full": "/tiles/rothun/lv_rhd_loa_t_ps_7_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 8,
            "url": "/tiles/rothun/lv_rhd_loa_t_ps_8_{y}x{x}.webp",
            "full": "/tiles/rothun/lv_rhd_loa_t_ps_8_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Queen's Garden",
        "tiles": [
          {
            "id": 3,
            "url": "/tiles/queens_garden/lv_rhd_queen_d_ps_3_{y}x{x}.webp",
            "full": "/tiles/queens_garden/lv_rhd_queen_d_ps_3_full.webp",
            "max": [
              3,
              4
            ]
          }
        ]
      },
      {
        "name": "Lake Shiverwave",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/lake_shiverwave/lv_rhd_silverl_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/lake_shiverwave/lv_rhd_silverl_f_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/lake_shiverwave/lv_rhd_silverl_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/lake_shiverwave/lv_rhd_silverl_f_ps_1_full.webp",
            "max": [
              5,
              5
            ]
          },
          {
            "id": 2,
            "url": "/tiles/lake_shiverwave/lv_rhd_silverl_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/lake_shiverwave/lv_rhd_silverl_f_ps_2_full.webp",
            "max": [
              8,
              8
            ]
          },
          {
            "id": 3,
            "url": "/tiles/lake_shiverwave/lv_rhd_silverl_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/lake_shiverwave/lv_rhd_silverl_f_ps_3_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Glass Lotus Lake",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/glass_lotus_lake/lv_rhd_lotusap_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/glass_lotus_lake/lv_rhd_lotusap_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 1,
            "url": "/tiles/glass_lotus_lake/lv_rhd_lotusap_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/glass_lotus_lake/lv_rhd_lotusap_f_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 2,
            "url": "/tiles/glass_lotus_lake/lv_rhd_lotusap_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/glass_lotus_lake/lv_rhd_lotusap_f_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/glass_lotus_lake/lv_rhd_lotusap_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/glass_lotus_lake/lv_rhd_lotusap_f_ps_3_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Breezesome Brae",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/breezesome_brae/lv_rhd_breezeap_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/breezesome_brae/lv_rhd_breezeap_f_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 2,
            "url": "/tiles/breezesome_brae/lv_rhd_breezeap_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/breezesome_brae/lv_rhd_breezeap_f_ps_2_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Xeneela Ruins",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/xeneela_ruins/lv_rhd_zenail_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/xeneela_ruins/lv_rhd_zenail_f_ps_0_full.webp",
            "max": [
              5,
              5
            ]
          },
          {
            "id": 1,
            "url": "/tiles/xeneela_ruins/lv_rhd_zenail_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/xeneela_ruins/lv_rhd_zenail_f_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 2,
            "url": "/tiles/xeneela_ruins/lv_rhd_zenail_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/xeneela_ruins/lv_rhd_zenail_f_ps_2_full.webp",
            "max": [
              5,
              5
            ]
          },
          {
            "id": 3,
            "url": "/tiles/xeneela_ruins/lv_rhd_zenail_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/xeneela_ruins/lv_rhd_zenail_f_ps_3_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 4,
            "url": "/tiles/xeneela_ruins/lv_rhd_zenail_f_ps_4_{y}x{x}.webp",
            "full": "/tiles/xeneela_ruins/lv_rhd_zenail_f_ps_4_full.webp",
            "max": [
              5,
              5
            ]
          }
        ]
      },
      {
        "name": "Elzowin's Shade",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/elzowins_shade/lv_rhd_shadeel_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/elzowins_shade/lv_rhd_shadeel_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 2,
            "url": "/tiles/elzowins_shade/lv_rhd_shadeel_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/elzowins_shade/lv_rhd_shadeel_f_ps_2_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 3,
            "url": "/tiles/elzowins_shade/lv_rhd_shadeel_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/elzowins_shade/lv_rhd_shadeel_f_ps_3_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Rohendel Clementia",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/rohendel_clementia/lv_rhd_silverl_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/rohendel_clementia/lv_rhd_silverl_f_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/rohendel_clementia/lv_rhd_silverl_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/rohendel_clementia/lv_rhd_silverl_f_ps_1_full.webp",
            "max": [
              5,
              5
            ]
          },
          {
            "id": 2,
            "url": "/tiles/rohendel_clementia/lv_rhd_silverl_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/rohendel_clementia/lv_rhd_silverl_f_ps_2_full.webp",
            "max": [
              8,
              8
            ]
          },
          {
            "id": 3,
            "url": "/tiles/rohendel_clementia/lv_rhd_silverl_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/rohendel_clementia/lv_rhd_silverl_f_ps_3_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Ruptured Seal Site",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/ruptured_seal_site/lv_rhd_floodseal_i_ps_2_{y}x{x}.webp",
            "full": "/tiles/ruptured_seal_site/lv_rhd_floodseal_i_ps_2_full.webp",
            "max": [
              8,
              8
            ]
          }
        ]
      },
      {
        "name": "Storm Temple",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/storm_temple/lv_rhd_templew_i_ps_0_{y}x{x}.webp",
            "full": "/tiles/storm_temple/lv_rhd_templew_i_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Realm of Elementals",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/realm_of_elementals/lv_rhd_spiritl_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/realm_of_elementals/lv_rhd_spiritl_d_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Phantom Palace",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_0_{y}x{x}.webp",
            "full": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_0_full.webp",
            "max": [
              10,
              6
            ]
          },
          {
            "id": 1,
            "url": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_1_{y}x{x}.webp",
            "full": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 2,
            "url": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_2_{y}x{x}.webp",
            "full": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 3,
            "url": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_3_{y}x{x}.webp",
            "full": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_3_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 4,
            "url": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_4_{y}x{x}.webp",
            "full": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_4_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_5_{y}x{x}.webp",
            "full": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_5_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 6,
            "url": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_6_{y}x{x}.webp",
            "full": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_6_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 7,
            "url": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_7_{y}x{x}.webp",
            "full": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_7_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 8,
            "url": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_8_{y}x{x}.webp",
            "full": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_8_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 9,
            "url": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_9_{y}x{x}.webp",
            "full": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_9_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 11,
            "url": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_11_{y}x{x}.webp",
            "full": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_11_full.webp",
            "max": [
              10,
              5
            ]
          },
          {
            "id": 12,
            "url": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_12_{y}x{x}.webp",
            "full": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_12_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 13,
            "url": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_13_{y}x{x}.webp",
            "full": "/tiles/phantom_palace/lv_rhd_palacedp_c_ps_13_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Forbidden Altar",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/forbidden_altar/lv_rhd_altar_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/forbidden_altar/lv_rhd_altar_d_ps_0_full.webp",
            "max": [
              2,
              6
            ]
          }
        ]
      },
      {
        "name": "Secret Dungeon",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/secret_dungeon/lv_scd_rohendel_ps_1_{y}x{x}.webp",
            "full": "/tiles/secret_dungeon/lv_scd_rohendel_ps_1_full.webp",
            "max": [
              17,
              24
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Rethramis",
    "areas": [
      {
        "name": "Trua, the Forgotten Land",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/trua_the_forgotten_land/lv_atm_lltrua_i_ps_0_{y}x{x}.webp",
            "full": "/tiles/trua_the_forgotten_land/lv_atm_lltrua_i_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/trua_the_forgotten_land/lv_atm_lltrua_i_ps_1_{y}x{x}.webp",
            "full": "/tiles/trua_the_forgotten_land/lv_atm_lltrua_i_ps_1_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/trua_the_forgotten_land/lv_atm_lltrua_i_ps_4_{y}x{x}.webp",
            "full": "/tiles/trua_the_forgotten_land/lv_atm_lltrua_i_ps_4_full.webp",
            "max": [
              2,
              5
            ]
          },
          {
            "id": 5,
            "url": "/tiles/trua_the_forgotten_land/lv_atm_lltrua_i_ps_5_{y}x{x}.webp",
            "full": "/tiles/trua_the_forgotten_land/lv_atm_lltrua_i_ps_5_full.webp",
            "max": [
              1,
              2
            ]
          }
        ]
      },
      {
        "name": "Prideholme",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/prideholme/lv_atm_leonhart_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/prideholme/lv_atm_leonhart_t_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/prideholme/lv_atm_leonhart_t_ps_1_{y}x{x}.webp",
            "full": "/tiles/prideholme/lv_atm_leonhart_t_ps_1_full.webp",
            "max": [
              3,
              4
            ]
          },
          {
            "id": 7,
            "url": "/tiles/prideholme/lv_atm_leonhart_t_ps_7_{y}x{x}.webp",
            "full": "/tiles/prideholme/lv_atm_leonhart_t_ps_7_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 9,
            "url": "/tiles/prideholme/lv_atm_leonhart_t_ps_9_{y}x{x}.webp",
            "full": "/tiles/prideholme/lv_atm_leonhart_t_ps_9_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Loghill",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/loghill/lv_atm_loghill_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/loghill/lv_atm_loghill_f_ps_0_full.webp",
            "max": [
              8,
              10
            ]
          }
        ]
      },
      {
        "name": "Runa Pass",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/runa_pass/lv_atm_runapass_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/runa_pass/lv_atm_runapass_d_ps_0_full.webp",
            "max": [
              4,
              3
            ]
          },
          {
            "id": 12,
            "url": "/tiles/runa_pass/lv_atm_runapass_d_ps_12_{y}x{x}.webp",
            "full": "/tiles/runa_pass/lv_atm_runapass_d_ps_12_full.webp",
            "max": [
              4,
              2
            ]
          }
        ]
      },
      {
        "name": "Prideholme under Attack",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/prideholme_under_attack/lv_atm_dleonhart_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/prideholme_under_attack/lv_atm_dleonhart_d_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/prideholme_under_attack/lv_atm_dleonhart_d_ps_1_{y}x{x}.webp",
            "full": "/tiles/prideholme_under_attack/lv_atm_dleonhart_d_ps_1_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/prideholme_under_attack/lv_atm_dleonhart_d_ps_3_{y}x{x}.webp",
            "full": "/tiles/prideholme_under_attack/lv_atm_dleonhart_d_ps_3_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 7,
            "url": "/tiles/prideholme_under_attack/lv_atm_dleonhart_d_ps_7_{y}x{x}.webp",
            "full": "/tiles/prideholme_under_attack/lv_atm_dleonhart_d_ps_7_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 9,
            "url": "/tiles/prideholme_under_attack/lv_atm_dleonhart_d_ps_9_{y}x{x}.webp",
            "full": "/tiles/prideholme_under_attack/lv_atm_dleonhart_d_ps_9_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Ankumo Mountain",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/ankumo_mountain/lv_atm_anguemosm_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/ankumo_mountain/lv_atm_anguemosm_f_ps_0_full.webp",
            "max": [
              7,
              7
            ]
          }
        ]
      },
      {
        "name": "Rethramis Border",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/rethramis_border/lv_atm_border_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/rethramis_border/lv_atm_border_f_ps_0_full.webp",
            "max": [
              7,
              6
            ]
          }
        ]
      },
      {
        "name": "Aquilok's Head",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/aquiloks_head/lv_atm_aguilossh_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/aquiloks_head/lv_atm_aguilossh_d_ps_0_full.webp",
            "max": [
              3,
              4
            ]
          }
        ]
      },
      {
        "name": "Aquilok’s Tail",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/aquiloks_tail/lv_atm_aguilosst_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/aquiloks_tail/lv_atm_aguilosst_d_ps_0_full.webp",
            "max": [
              3,
              4
            ]
          },
          {
            "id": 3,
            "url": "/tiles/aquiloks_tail/lv_atm_aguilosst_d_ps_3_{y}x{x}.webp",
            "full": "/tiles/aquiloks_tail/lv_atm_aguilosst_d_ps_3_full.webp",
            "max": [
              5,
              4
            ]
          }
        ]
      },
      {
        "name": "Toxiclaw Cavern",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/toxiclaw_cavern/lv_atm_poisoncrd_d_ps_1_{y}x{x}.webp",
            "full": "/tiles/toxiclaw_cavern/lv_atm_poisoncrd_d_ps_1_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Secret Dungeon",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/secret_dungeon/lv_scd_artemis_ps_0_{y}x{x}.webp",
            "full": "/tiles/secret_dungeon/lv_scd_artemis_ps_0_full.webp",
            "max": [
              10,
              28
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Shushire",
    "areas": [
      {
        "name": "Rigens Village",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/rigens_village/lv_shs_retown_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/rigens_village/lv_shs_retown_t_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/rigens_village/lv_shs_retown_t_ps_1_{y}x{x}.webp",
            "full": "/tiles/rigens_village/lv_shs_retown_t_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 2,
            "url": "/tiles/rigens_village/lv_shs_retown_t_ps_2_{y}x{x}.webp",
            "full": "/tiles/rigens_village/lv_shs_retown_t_ps_2_full.webp",
            "max": [
              3,
              4
            ]
          }
        ]
      },
      {
        "name": "Red Curtain Arena",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/red_curtain_arena/lv_shs_rcarena_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/red_curtain_arena/lv_shs_rcarena_d_ps_0_full.webp",
            "max": [
              4,
              3
            ]
          }
        ]
      },
      {
        "name": "Frozen Sea",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/frozen_sea/lv_shs_frozens_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/frozen_sea/lv_shs_frozens_f_ps_1_full.webp",
            "max": [
              7,
              7
            ]
          }
        ]
      },
      {
        "name": "Bitterwind Hill",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/bitterwind_hill/lv_shs_hillwind_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/bitterwind_hill/lv_shs_hillwind_f_ps_0_full.webp",
            "max": [
              6,
              5
            ]
          }
        ]
      },
      {
        "name": "Iceblood Plateau",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/iceblood_plateau/lv_shs_frozenjp_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/iceblood_plateau/lv_shs_frozenjp_f_ps_0_full.webp",
            "max": [
              6,
              7
            ]
          }
        ]
      },
      {
        "name": "Lake Eternity",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/lake_eternity/lv_shs_laketime_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/lake_eternity/lv_shs_laketime_f_ps_2_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Icewing Heights",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/icewing_heights/lv_shs_frozencl_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/icewing_heights/lv_shs_frozencl_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "The Espada",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/the_espada/lv_shs_frozens_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/the_espada/lv_shs_frozens_f_ps_1_full.webp",
            "max": [
              7,
              7
            ]
          }
        ]
      },
      {
        "name": "Lonely Queen's Hideout",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/lonely_queens_hideout/lv_shs_frozencl_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/lonely_queens_hideout/lv_shs_frozencl_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Cold Dusk Alley",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/cold_dusk_alley/lv_shs_retown_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/cold_dusk_alley/lv_shs_retown_t_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/cold_dusk_alley/lv_shs_retown_t_ps_1_{y}x{x}.webp",
            "full": "/tiles/cold_dusk_alley/lv_shs_retown_t_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 2,
            "url": "/tiles/cold_dusk_alley/lv_shs_retown_t_ps_2_{y}x{x}.webp",
            "full": "/tiles/cold_dusk_alley/lv_shs_retown_t_ps_2_full.webp",
            "max": [
              3,
              4
            ]
          }
        ]
      },
      {
        "name": "Frostpeak Temple",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/frostpeak_temple/lv_shs_ccside_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/frostpeak_temple/lv_shs_ccside_d_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Vrad's Hideout",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/vrads_hideout/lv_shs_hideoutb_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/vrads_hideout/lv_shs_hideoutb_d_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Maze of Mirrors",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/maze_of_mirrors/lv_shs_mazeio_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/maze_of_mirrors/lv_shs_mazeio_d_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/maze_of_mirrors/lv_shs_mazeio_d_ps_1_{y}x{x}.webp",
            "full": "/tiles/maze_of_mirrors/lv_shs_mazeio_d_ps_1_full.webp",
            "max": [
              5,
              5
            ]
          },
          {
            "id": 2,
            "url": "/tiles/maze_of_mirrors/lv_shs_mazeio_d_ps_2_{y}x{x}.webp",
            "full": "/tiles/maze_of_mirrors/lv_shs_mazeio_d_ps_2_full.webp",
            "max": [
              3,
              2
            ]
          }
        ]
      },
      {
        "name": "Secret Dungeon",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/secret_dungeon/lv_scd_shushire_ps_1_{y}x{x}.webp",
            "full": "/tiles/secret_dungeon/lv_scd_shushire_ps_1_full.webp",
            "max": [
              10,
              26
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Arthetine",
    "areas": [
      {
        "name": "Origins of Stern",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/origins_of_stern/lv_att_stern_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/origins_of_stern/lv_att_stern_t_ps_0_full.webp",
            "max": [
              7,
              6
            ]
          },
          {
            "id": 1,
            "url": "/tiles/origins_of_stern/lv_att_stern_t_ps_1_{y}x{x}.webp",
            "full": "/tiles/origins_of_stern/lv_att_stern_t_ps_1_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 2,
            "url": "/tiles/origins_of_stern/lv_att_stern_t_ps_2_{y}x{x}.webp",
            "full": "/tiles/origins_of_stern/lv_att_stern_t_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 3,
            "url": "/tiles/origins_of_stern/lv_att_stern_t_ps_3_{y}x{x}.webp",
            "full": "/tiles/origins_of_stern/lv_att_stern_t_ps_3_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 4,
            "url": "/tiles/origins_of_stern/lv_att_stern_t_ps_4_{y}x{x}.webp",
            "full": "/tiles/origins_of_stern/lv_att_stern_t_ps_4_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/origins_of_stern/lv_att_stern_t_ps_5_{y}x{x}.webp",
            "full": "/tiles/origins_of_stern/lv_att_stern_t_ps_5_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 6,
            "url": "/tiles/origins_of_stern/lv_att_stern_t_ps_6_{y}x{x}.webp",
            "full": "/tiles/origins_of_stern/lv_att_stern_t_ps_6_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 7,
            "url": "/tiles/origins_of_stern/lv_att_stern_t_ps_7_{y}x{x}.webp",
            "full": "/tiles/origins_of_stern/lv_att_stern_t_ps_7_full.webp",
            "max": [
              6,
              7
            ]
          },
          {
            "id": 8,
            "url": "/tiles/origins_of_stern/lv_att_stern_t_ps_8_{y}x{x}.webp",
            "full": "/tiles/origins_of_stern/lv_att_stern_t_ps_8_full.webp",
            "max": [
              8,
              10
            ]
          },
          {
            "id": 9,
            "url": "/tiles/origins_of_stern/lv_att_stern_t_ps_9_{y}x{x}.webp",
            "full": "/tiles/origins_of_stern/lv_att_stern_t_ps_9_full.webp",
            "max": [
              3,
              5
            ]
          },
          {
            "id": 10,
            "url": "/tiles/origins_of_stern/lv_att_stern_t_ps_10_{y}x{x}.webp",
            "full": "/tiles/origins_of_stern/lv_att_stern_t_ps_10_full.webp",
            "max": [
              2,
              3
            ]
          }
        ]
      },
      {
        "name": "Dr. Bergstrom's Laboratory",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/dr_bergstroms_laboratory/lv_att_ehmlab_d_ps_1_{y}x{x}.webp",
            "full": "/tiles/dr_bergstroms_laboratory/lv_att_ehmlab_d_ps_1_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 1,
            "url": "/tiles/dr_bergstroms_laboratory/lv_att_ehmlabap_d_ps_1_{y}x{x}.webp",
            "full": "/tiles/dr_bergstroms_laboratory/lv_att_ehmlabap_d_ps_1_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Arid Path",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/arid_path/lv_att_parched_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/arid_path/lv_att_parched_f_ps_0_full.webp",
            "max": [
              7,
              6
            ]
          },
          {
            "id": 2,
            "url": "/tiles/arid_path/lv_att_parched_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/arid_path/lv_att_parched_f_ps_2_full.webp",
            "max": [
              7,
              4
            ]
          }
        ]
      },
      {
        "name": "Scraplands",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/scraplands/lv_att_cracked_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/scraplands/lv_att_cracked_f_ps_0_full.webp",
            "max": [
              7,
              7
            ]
          }
        ]
      },
      {
        "name": "Nebelhorn",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/nebelhorn/lv_att_nevel_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/nebelhorn/lv_att_nevel_f_ps_0_full.webp",
            "max": [
              8,
              8
            ]
          }
        ]
      },
      {
        "name": "Windbringer Hills",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/windbringer_hills/lv_att_windbring_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/windbringer_hills/lv_att_windbring_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 3,
            "url": "/tiles/windbringer_hills/lv_att_windbring_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/windbringer_hills/lv_att_windbring_f_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Totrich",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/totrich/lv_att_totrichap_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/totrich/lv_att_totrichap_f_ps_0_full.webp",
            "max": [
              7,
              7
            ]
          },
          {
            "id": 1,
            "url": "/tiles/totrich/lv_att_totrichap_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/totrich/lv_att_totrichap_f_ps_1_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 2,
            "url": "/tiles/totrich/lv_att_totrichap_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/totrich/lv_att_totrichap_f_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Riza Falls",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/riza_falls/lv_att_riese_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/riza_falls/lv_att_riese_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 1,
            "url": "/tiles/riza_falls/lv_att_riese_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/riza_falls/lv_att_riese_f_ps_1_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Schreiber",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/schreiber/lv_att_parched_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/schreiber/lv_att_parched_f_ps_0_full.webp",
            "max": [
              7,
              6
            ]
          },
          {
            "id": 2,
            "url": "/tiles/schreiber/lv_att_parched_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/schreiber/lv_att_parched_f_ps_2_full.webp",
            "max": [
              7,
              4
            ]
          }
        ]
      },
      {
        "name": "Twilight Hill",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/twilight_hill/lv_att_nevel_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/twilight_hill/lv_att_nevel_f_ps_0_full.webp",
            "max": [
              8,
              8
            ]
          }
        ]
      },
      {
        "name": "Junkyard",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/junkyard/lv_att_windbring_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/junkyard/lv_att_windbring_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 3,
            "url": "/tiles/junkyard/lv_att_windbring_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/junkyard/lv_att_windbring_f_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Temple of Sceptrum",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/temple_of_sceptrum/lv_att_titemple_d_ps_2_{y}x{x}.webp",
            "full": "/tiles/temple_of_sceptrum/lv_att_titemple_d_ps_2_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Soldier Ant Nest",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/soldier_ant_nest/lv_att_antnest_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/soldier_ant_nest/lv_att_antnest_d_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Verdantier",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/verdantier/lv_att_ehrgeiz_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/verdantier/lv_att_ehrgeiz_d_ps_0_full.webp",
            "max": [
              3,
              4
            ]
          },
          {
            "id": 1,
            "url": "/tiles/verdantier/lv_att_ehrgeiz_d_ps_1_{y}x{x}.webp",
            "full": "/tiles/verdantier/lv_att_ehrgeiz_d_ps_1_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/verdantier/lv_att_ehrgeiz_d_ps_2_{y}x{x}.webp",
            "full": "/tiles/verdantier/lv_att_ehrgeiz_d_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/verdantier/lv_att_ehrgeiz_d_ps_3_{y}x{x}.webp",
            "full": "/tiles/verdantier/lv_att_ehrgeiz_d_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Heart of Sceptrum",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/heart_of_sceptrum/lv_att_heartkt_c_ps_0_{y}x{x}.webp",
            "full": "/tiles/heart_of_sceptrum/lv_att_heartkt_c_ps_0_full.webp",
            "max": [
              20,
              10
            ]
          },
          {
            "id": 2,
            "url": "/tiles/heart_of_sceptrum/lv_att_heartkt_c_ps_2_{y}x{x}.webp",
            "full": "/tiles/heart_of_sceptrum/lv_att_heartkt_c_ps_2_full.webp",
            "max": [
              8,
              6
            ]
          },
          {
            "id": 3,
            "url": "/tiles/heart_of_sceptrum/lv_att_heartkt_c_ps_3_{y}x{x}.webp",
            "full": "/tiles/heart_of_sceptrum/lv_att_heartkt_c_ps_3_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 4,
            "url": "/tiles/heart_of_sceptrum/lv_att_heartkt_c_ps_4_{y}x{x}.webp",
            "full": "/tiles/heart_of_sceptrum/lv_att_heartkt_c_ps_4_full.webp",
            "max": [
              8,
              5
            ]
          }
        ]
      },
      {
        "name": "Secret Dungeon",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/secret_dungeon/lv_scd_arthetine_ps_0_{y}x{x}.webp",
            "full": "/tiles/secret_dungeon/lv_scd_arthetine_ps_0_full.webp",
            "max": [
              14,
              29
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Yudia",
    "areas": [
      {
        "name": "Saland Hill",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/saland_hill/lv_eud_sahill_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/saland_hill/lv_eud_sahill_f_ps_2_full.webp",
            "max": [
              10,
              13
            ]
          }
        ]
      },
      {
        "name": "Ozhorn Hill",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/ozhorn_hill/lv_eud_ozhill_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/ozhorn_hill/lv_eud_ozhill_f_ps_1_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Sapira Cave",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/sapira_cave/lv_eud_sacave_d_ps_2_{y}x{x}.webp",
            "full": "/tiles/sapira_cave/lv_eud_sacave_d_ps_2_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Morai Ruins",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/morai_ruins/lv_eud_moray_c_ps_0_{y}x{x}.webp",
            "full": "/tiles/morai_ruins/lv_eud_moray_c_ps_0_full.webp",
            "max": [
              5,
              7
            ]
          }
        ]
      },
      {
        "name": "Secret Dungeon",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/secret_dungeon/lv_scd_eudia_ps_1_{y}x{x}.webp",
            "full": "/tiles/secret_dungeon/lv_scd_eudia_ps_1_full.webp",
            "max": [
              11,
              29
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Anikka",
    "areas": [
      {
        "name": "Port City Changhun",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/port_city_changhun/lv_anh_changc_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/port_city_changhun/lv_anh_changc_t_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 1,
            "url": "/tiles/port_city_changhun/lv_anh_changc_t_ps_1_{y}x{x}.webp",
            "full": "/tiles/port_city_changhun/lv_anh_changc_t_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 2,
            "url": "/tiles/port_city_changhun/lv_anh_changc_t_ps_2_{y}x{x}.webp",
            "full": "/tiles/port_city_changhun/lv_anh_changc_t_ps_2_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/port_city_changhun/lv_anh_changc_t_ps_3_{y}x{x}.webp",
            "full": "/tiles/port_city_changhun/lv_anh_changc_t_ps_3_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 4,
            "url": "/tiles/port_city_changhun/lv_anh_changc_t_ps_4_{y}x{x}.webp",
            "full": "/tiles/port_city_changhun/lv_anh_changc_t_ps_4_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/port_city_changhun/lv_anh_changc_t_ps_5_{y}x{x}.webp",
            "full": "/tiles/port_city_changhun/lv_anh_changc_t_ps_5_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 8,
            "url": "/tiles/port_city_changhun/lv_anh_changc_t_ps_8_{y}x{x}.webp",
            "full": "/tiles/port_city_changhun/lv_anh_changc_t_ps_8_full.webp",
            "max": [
              3,
              2
            ]
          }
        ]
      },
      {
        "name": "Clearcloud of Anikka",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/clearcloud_of_anikka/lv_anh_changc_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/clearcloud_of_anikka/lv_anh_changc_t_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 1,
            "url": "/tiles/clearcloud_of_anikka/lv_anh_changc_t_ps_1_{y}x{x}.webp",
            "full": "/tiles/clearcloud_of_anikka/lv_anh_changc_t_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 2,
            "url": "/tiles/clearcloud_of_anikka/lv_anh_changc_t_ps_2_{y}x{x}.webp",
            "full": "/tiles/clearcloud_of_anikka/lv_anh_changc_t_ps_2_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/clearcloud_of_anikka/lv_anh_changc_t_ps_3_{y}x{x}.webp",
            "full": "/tiles/clearcloud_of_anikka/lv_anh_changc_t_ps_3_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 4,
            "url": "/tiles/clearcloud_of_anikka/lv_anh_changc_t_ps_4_{y}x{x}.webp",
            "full": "/tiles/clearcloud_of_anikka/lv_anh_changc_t_ps_4_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/clearcloud_of_anikka/lv_anh_changc_t_ps_5_{y}x{x}.webp",
            "full": "/tiles/clearcloud_of_anikka/lv_anh_changc_t_ps_5_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 8,
            "url": "/tiles/clearcloud_of_anikka/lv_anh_changc_t_ps_8_{y}x{x}.webp",
            "full": "/tiles/clearcloud_of_anikka/lv_anh_changc_t_ps_8_full.webp",
            "max": [
              3,
              2
            ]
          }
        ]
      },
      {
        "name": "Delphi Inn",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/delphi_inn/lv_anh_delphiinn_d_ps_1_{y}x{x}.webp",
            "full": "/tiles/delphi_inn/lv_anh_delphiinn_d_ps_1_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Delphi Township",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/delphi_township/lv_anh_delphica_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/delphi_township/lv_anh_delphica_f_ps_0_full.webp",
            "max": [
              6,
              5
            ]
          }
        ]
      },
      {
        "name": "Rattan Hill",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/rattan_hill/lv_anh_rattanh_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/rattan_hill/lv_anh_rattanh_f_ps_0_full.webp",
            "max": [
              5,
              5
            ]
          },
          {
            "id": 1,
            "url": "/tiles/rattan_hill/lv_anh_rattanh_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/rattan_hill/lv_anh_rattanh_f_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Melody Forest",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/melody_forest/lv_anh_melodyf_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/melody_forest/lv_anh_melodyf_f_ps_0_full.webp",
            "max": [
              4,
              5
            ]
          }
        ]
      },
      {
        "name": "Prisma Valley",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/prisma_valley/lv_anh_mirrorva_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/prisma_valley/lv_anh_mirrorva_f_ps_1_full.webp",
            "max": [
              6,
              5
            ]
          }
        ]
      },
      {
        "name": "Twilight Mists",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/twilight_mists/lv_anh_twilightm_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/twilight_mists/lv_anh_twilightm_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Guardian Canyon",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/guardian_canyon/lv_anh_gvalley_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/guardian_canyon/lv_anh_gvalley_d_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Moonmist Manor",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/moonmist_manor/lv_anh_fullmoonh_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/moonmist_manor/lv_anh_fullmoonh_d_ps_0_full.webp",
            "max": [
              4,
              3
            ]
          }
        ]
      },
      {
        "name": "Yeon's Barrier",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/yeons_barrier/lv_anh_barrieroy_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/yeons_barrier/lv_anh_barrieroy_d_ps_0_full.webp",
            "max": [
              5,
              5
            ]
          }
        ]
      },
      {
        "name": "Jeok's Barrier",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/jeoks_barrier/lv_anh_barrieroj_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/jeoks_barrier/lv_anh_barrieroj_d_ps_0_full.webp",
            "max": [
              6,
              4
            ]
          }
        ]
      },
      {
        "name": "Foul Hollow",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/foul_hollow/lv_anh_deadsoulc_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/foul_hollow/lv_anh_deadsoulc_d_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Bleak Edge",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/bleak_edge/lv_anh_horizonold_d_ps_1_{y}x{x}.webp",
            "full": "/tiles/bleak_edge/lv_anh_horizonold_d_ps_1_full.webp",
            "max": [
              5,
              3
            ]
          },
          {
            "id": 4,
            "url": "/tiles/bleak_edge/lv_anh_horizonold_d_ps_4_{y}x{x}.webp",
            "full": "/tiles/bleak_edge/lv_anh_horizonold_d_ps_4_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Secret Dungeon",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/secret_dungeon/lv_scd_anihc_ps_2_{y}x{x}.webp",
            "full": "/tiles/secret_dungeon/lv_scd_anihc_ps_2_full.webp",
            "max": [
              18,
              12
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "East Luterra",
    "areas": [
      {
        "name": "Luterra Castle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_0_full.webp",
            "max": [
              6,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_1_{y}x{x}.webp",
            "full": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_1_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 2,
            "url": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_2_{y}x{x}.webp",
            "full": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_2_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 3,
            "url": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_3_{y}x{x}.webp",
            "full": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_3_full.webp",
            "max": [
              7,
              10
            ]
          },
          {
            "id": 4,
            "url": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_4_{y}x{x}.webp",
            "full": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_4_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 5,
            "url": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_5_{y}x{x}.webp",
            "full": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_5_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 6,
            "url": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_6_{y}x{x}.webp",
            "full": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_6_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 7,
            "url": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_7_{y}x{x}.webp",
            "full": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_7_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 12,
            "url": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_12_{y}x{x}.webp",
            "full": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_12_full.webp",
            "max": [
              2,
              1
            ]
          },
          {
            "id": 13,
            "url": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_13_{y}x{x}.webp",
            "full": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_13_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 14,
            "url": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_14_{y}x{x}.webp",
            "full": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_14_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 15,
            "url": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_15_{y}x{x}.webp",
            "full": "/tiles/luterra_castle/lv_lut_lucastle_t_ps_15_full.webp",
            "max": [
              8,
              7
            ]
          }
        ]
      },
      {
        "name": "Wavestrand Port",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/wavestrand_port/lv_lut_mawport_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/wavestrand_port/lv_lut_mawport_t_ps_0_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/wavestrand_port/lv_lut_mawport_t_ps_2_{y}x{x}.webp",
            "full": "/tiles/wavestrand_port/lv_lut_mawport_t_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/wavestrand_port/lv_lut_mawport_t_ps_3_{y}x{x}.webp",
            "full": "/tiles/wavestrand_port/lv_lut_mawport_t_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/wavestrand_port/lv_lut_mawport_t_ps_4_{y}x{x}.webp",
            "full": "/tiles/wavestrand_port/lv_lut_mawport_t_ps_4_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/wavestrand_port/lv_lut_mawport_t_ps_5_{y}x{x}.webp",
            "full": "/tiles/wavestrand_port/lv_lut_mawport_t_ps_5_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 6,
            "url": "/tiles/wavestrand_port/lv_lut_mawport_t_ps_6_{y}x{x}.webp",
            "full": "/tiles/wavestrand_port/lv_lut_mawport_t_ps_6_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 7,
            "url": "/tiles/wavestrand_port/lv_lut_mawport_t_ps_7_{y}x{x}.webp",
            "full": "/tiles/wavestrand_port/lv_lut_mawport_t_ps_7_full.webp",
            "max": [
              4,
              3
            ]
          }
        ]
      },
      {
        "name": "Luterra Flamberg",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/luterra_flamberg/lv_lut_mawport_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/luterra_flamberg/lv_lut_mawport_t_ps_0_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/luterra_flamberg/lv_lut_mawport_t_ps_2_{y}x{x}.webp",
            "full": "/tiles/luterra_flamberg/lv_lut_mawport_t_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/luterra_flamberg/lv_lut_mawport_t_ps_3_{y}x{x}.webp",
            "full": "/tiles/luterra_flamberg/lv_lut_mawport_t_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/luterra_flamberg/lv_lut_mawport_t_ps_4_{y}x{x}.webp",
            "full": "/tiles/luterra_flamberg/lv_lut_mawport_t_ps_4_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/luterra_flamberg/lv_lut_mawport_t_ps_5_{y}x{x}.webp",
            "full": "/tiles/luterra_flamberg/lv_lut_mawport_t_ps_5_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 6,
            "url": "/tiles/luterra_flamberg/lv_lut_mawport_t_ps_6_{y}x{x}.webp",
            "full": "/tiles/luterra_flamberg/lv_lut_mawport_t_ps_6_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 7,
            "url": "/tiles/luterra_flamberg/lv_lut_mawport_t_ps_7_{y}x{x}.webp",
            "full": "/tiles/luterra_flamberg/lv_lut_mawport_t_ps_7_full.webp",
            "max": [
              4,
              3
            ]
          }
        ]
      },
      {
        "name": "Dyorika Plain",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/dyorika_plain/lv_lut_doplain_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/dyorika_plain/lv_lut_doplain_f_ps_1_full.webp",
            "max": [
              7,
              7
            ]
          }
        ]
      },
      {
        "name": "Sunbright Hill",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/sunbright_hill/lv_lut_sohill_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/sunbright_hill/lv_lut_sohill_f_ps_0_full.webp",
            "max": [
              5,
              6
            ]
          }
        ]
      },
      {
        "name": "Flowering Orchard",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/flowering_orchard/lv_lut_pearhabit_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/flowering_orchard/lv_lut_pearhabit_f_ps_0_full.webp",
            "max": [
              7,
              7
            ]
          },
          {
            "id": 1,
            "url": "/tiles/flowering_orchard/lv_lut_pearhabit_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/flowering_orchard/lv_lut_pearhabit_f_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Blackrose Chapel",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/blackrose_chapel/lv_lut_brchurch_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/blackrose_chapel/lv_lut_brchurch_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 2,
            "url": "/tiles/blackrose_chapel/lv_lut_brchurch_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/blackrose_chapel/lv_lut_brchurch_f_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Leyar Terrace",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/leyar_terrace/lv_lut_leterrace_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/leyar_terrace/lv_lut_leterrace_f_ps_0_full.webp",
            "max": [
              7,
              7
            ]
          }
        ]
      },
      {
        "name": "Borea's Domain",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/boreas_domain/lv_lut_bodomain_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/boreas_domain/lv_lut_bodomain_f_ps_0_full.webp",
            "max": [
              8,
              7
            ]
          }
        ]
      },
      {
        "name": "Croconys Seashore",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/croconys_seashore/lv_lut_crseasho_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/croconys_seashore/lv_lut_crseasho_f_ps_1_full.webp",
            "max": [
              5,
              11
            ]
          }
        ]
      },
      {
        "name": "Blackrose Basement",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/blackrose_basement/lv_lut_brcbase_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/blackrose_basement/lv_lut_brcbase_d_ps_0_full.webp",
            "max": [
              5,
              7
            ]
          }
        ]
      },
      {
        "name": "Lostwind Cliff",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/lostwind_cliff/lv_lut_bscliff_d_ps_1_{y}x{x}.webp",
            "full": "/tiles/lostwind_cliff/lv_lut_bscliff_d_ps_1_full.webp",
            "max": [
              1,
              3
            ]
          }
        ]
      },
      {
        "name": "Stormcry Grotto",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/stormcry_grotto/lv_lut_crstorm_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/stormcry_grotto/lv_lut_crstorm_d_ps_0_full.webp",
            "max": [
              5,
              6
            ]
          }
        ]
      },
      {
        "name": "Lastra Forest",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/lastra_forest/lv_lut_lutomba_c_ps_1_{y}x{x}.webp",
            "full": "/tiles/lastra_forest/lv_lut_lutomba_c_ps_1_full.webp",
            "max": [
              5,
              6
            ]
          }
        ]
      },
      {
        "name": "Tomb of the Great King Luterra",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/tomb_of_the_great_king_luterra/lv_lut_lutombb_c_ps_0_{y}x{x}.webp",
            "full": "/tiles/tomb_of_the_great_king_luterra/lv_lut_lutombb_c_ps_0_full.webp",
            "max": [
              2,
              6
            ]
          }
        ]
      },
      {
        "name": "Festival of Madness",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/festival_of_madness/lv_lut_castlebole_i_ps_0_{y}x{x}.webp",
            "full": "/tiles/festival_of_madness/lv_lut_castlebole_i_ps_0_full.webp",
            "max": [
              8,
              7
            ]
          }
        ]
      },
      {
        "name": "Secret Dungeon",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/secret_dungeon/lv_scd_luterane_ps_2_{y}x{x}.webp",
            "full": "/tiles/secret_dungeon/lv_scd_luterane_ps_2_full.webp",
            "max": [
              9,
              21
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "West Luterra",
    "areas": [
      {
        "name": "Mount Zagoras",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/mount_zagoras/lv_lut_zamount_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/mount_zagoras/lv_lut_zamount_f_ps_0_full.webp",
            "max": [
              7,
              7
            ]
          }
        ]
      },
      {
        "name": "Lakebar",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/lakebar/lv_lut_lakebar_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/lakebar/lv_lut_lakebar_f_ps_1_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Medrick Monastery",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/medrick_monastery/lv_lut_memonast_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/medrick_monastery/lv_lut_memonast_f_ps_1_full.webp",
            "max": [
              7,
              7
            ]
          },
          {
            "id": 3,
            "url": "/tiles/medrick_monastery/lv_lut_memonast_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/medrick_monastery/lv_lut_memonast_f_ps_3_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 4,
            "url": "/tiles/medrick_monastery/lv_lut_memonast_f_ps_4_{y}x{x}.webp",
            "full": "/tiles/medrick_monastery/lv_lut_memonast_f_ps_4_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Bilbrin Forest",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/bilbrin_forest/lv_lut_biforest_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/bilbrin_forest/lv_lut_biforest_f_ps_2_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Battlebound Plains",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/battlebound_plains/lv_lut_pofbattle_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/battlebound_plains/lv_lut_pofbattle_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Iron Lake",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/iron_lake/lv_lut_lakebar_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/iron_lake/lv_lut_lakebar_f_ps_1_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Brilliant Ridge",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/brilliant_ridge/lv_lut_rishine_d_ps_1_{y}x{x}.webp",
            "full": "/tiles/brilliant_ridge/lv_lut_rishine_d_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Gray Hammer Mine",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/gray_hammer_mine/lv_lut_grayhmine_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/gray_hammer_mine/lv_lut_grayhmine_d_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Glorious Wall",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/glorious_wall/lv_lut_waglory_d_ps_2_{y}x{x}.webp",
            "full": "/tiles/glorious_wall/lv_lut_waglory_d_ps_2_full.webp",
            "max": [
              7,
              5
            ]
          }
        ]
      },
      {
        "name": "Secret Dungeon",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/secret_dungeon/lv_scd_luterans_ps_0_{y}x{x}.webp",
            "full": "/tiles/secret_dungeon/lv_scd_luterans_ps_0_full.webp",
            "max": [
              9,
              21
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Feiton",
    "areas": [
      {
        "name": "Kalaja",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/kalaja/lv_fat_karlajavil_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/kalaja/lv_fat_karlajavil_t_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/kalaja/lv_fat_karlajavil_t_ps_1_{y}x{x}.webp",
            "full": "/tiles/kalaja/lv_fat_karlajavil_t_ps_1_full.webp",
            "max": [
              4,
              3
            ]
          },
          {
            "id": 2,
            "url": "/tiles/kalaja/lv_fat_karlajavil_t_ps_2_{y}x{x}.webp",
            "full": "/tiles/kalaja/lv_fat_karlajavil_t_ps_2_full.webp",
            "max": [
              3,
              5
            ]
          },
          {
            "id": 3,
            "url": "/tiles/kalaja/lv_fat_karlajavil_t_ps_3_{y}x{x}.webp",
            "full": "/tiles/kalaja/lv_fat_karlajavil_t_ps_3_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 4,
            "url": "/tiles/kalaja/lv_fat_karlajavil_t_ps_4_{y}x{x}.webp",
            "full": "/tiles/kalaja/lv_fat_karlajavil_t_ps_4_full.webp",
            "max": [
              7,
              9
            ]
          },
          {
            "id": 5,
            "url": "/tiles/kalaja/lv_fat_karlajavil_t_ps_5_{y}x{x}.webp",
            "full": "/tiles/kalaja/lv_fat_karlajavil_t_ps_5_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 6,
            "url": "/tiles/kalaja/lv_fat_karlajavil_t_ps_6_{y}x{x}.webp",
            "full": "/tiles/kalaja/lv_fat_karlajavil_t_ps_6_full.webp",
            "max": [
              2,
              1
            ]
          },
          {
            "id": 7,
            "url": "/tiles/kalaja/lv_fat_karlajavil_t_ps_7_{y}x{x}.webp",
            "full": "/tiles/kalaja/lv_fat_karlajavil_t_ps_7_full.webp",
            "max": [
              1,
              2
            ]
          }
        ]
      },
      {
        "name": "Nameless Valley",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/nameless_valley/lv_fat_unravin_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/nameless_valley/lv_fat_unravin_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 1,
            "url": "/tiles/nameless_valley/lv_fat_unravin_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/nameless_valley/lv_fat_unravin_f_ps_1_full.webp",
            "max": [
              5,
              6
            ]
          },
          {
            "id": 2,
            "url": "/tiles/nameless_valley/lv_fat_unravin_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/nameless_valley/lv_fat_unravin_f_ps_2_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 3,
            "url": "/tiles/nameless_valley/lv_fat_unravin_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/nameless_valley/lv_fat_unravin_f_ps_3_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/nameless_valley/lv_fat_unravin_f_ps_4_{y}x{x}.webp",
            "full": "/tiles/nameless_valley/lv_fat_unravin_f_ps_4_full.webp",
            "max": [
              1,
              2
            ]
          }
        ]
      },
      {
        "name": "Wailing Swamp",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/wailing_swamp/lv_fat_wailsw_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/wailing_swamp/lv_fat_wailsw_f_ps_1_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Shady Cliff",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/shady_cliff/lv_fat_shcliff_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/shady_cliff/lv_fat_shcliff_f_ps_0_full.webp",
            "max": [
              6,
              7
            ]
          },
          {
            "id": 1,
            "url": "/tiles/shady_cliff/lv_fat_shcliff_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/shady_cliff/lv_fat_shcliff_f_ps_1_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/shady_cliff/lv_fat_shcliff_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/shady_cliff/lv_fat_shcliff_f_ps_2_full.webp",
            "max": [
              2,
              1
            ]
          }
        ]
      },
      {
        "name": "Red Moonshade",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/red_moonshade/lv_fat_prmoon_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/red_moonshade/lv_fat_prmoon_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 1,
            "url": "/tiles/red_moonshade/lv_fat_prmoon_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/red_moonshade/lv_fat_prmoon_f_ps_1_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 2,
            "url": "/tiles/red_moonshade/lv_fat_prmoon_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/red_moonshade/lv_fat_prmoon_f_ps_2_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 3,
            "url": "/tiles/red_moonshade/lv_fat_prmoon_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/red_moonshade/lv_fat_prmoon_f_ps_3_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 4,
            "url": "/tiles/red_moonshade/lv_fat_prmoon_f_ps_4_{y}x{x}.webp",
            "full": "/tiles/red_moonshade/lv_fat_prmoon_f_ps_4_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Shadow Monastery",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/shadow_monastery/lv_fat_shmonas_i_ps_2_{y}x{x}.webp",
            "full": "/tiles/shadow_monastery/lv_fat_shmonas_i_ps_2_full.webp",
            "max": [
              2,
              4
            ]
          }
        ]
      },
      {
        "name": "Feiton Varukas",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/feiton_varukas/lv_fat_unravin_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/feiton_varukas/lv_fat_unravin_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 1,
            "url": "/tiles/feiton_varukas/lv_fat_unravin_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/feiton_varukas/lv_fat_unravin_f_ps_1_full.webp",
            "max": [
              5,
              6
            ]
          },
          {
            "id": 2,
            "url": "/tiles/feiton_varukas/lv_fat_unravin_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/feiton_varukas/lv_fat_unravin_f_ps_2_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 3,
            "url": "/tiles/feiton_varukas/lv_fat_unravin_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/feiton_varukas/lv_fat_unravin_f_ps_3_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/feiton_varukas/lv_fat_unravin_f_ps_4_{y}x{x}.webp",
            "full": "/tiles/feiton_varukas/lv_fat_unravin_f_ps_4_full.webp",
            "max": [
              1,
              2
            ]
          }
        ]
      },
      {
        "name": "Ruined Castle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/ruined_castle/lv_fat_ocastle_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/ruined_castle/lv_fat_ocastle_d_ps_0_full.webp",
            "max": [
              3,
              4
            ]
          },
          {
            "id": 1,
            "url": "/tiles/ruined_castle/lv_fat_ocastle_d_ps_1_{y}x{x}.webp",
            "full": "/tiles/ruined_castle/lv_fat_ocastle_d_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/ruined_castle/lv_fat_ocastle_d_ps_2_{y}x{x}.webp",
            "full": "/tiles/ruined_castle/lv_fat_ocastle_d_ps_2_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/ruined_castle/lv_fat_ocastle_d_ps_3_{y}x{x}.webp",
            "full": "/tiles/ruined_castle/lv_fat_ocastle_d_ps_3_full.webp",
            "max": [
              3,
              4
            ]
          },
          {
            "id": 0,
            "url": "/tiles/ruined_castle/lv_fat_ocastlea_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/ruined_castle/lv_fat_ocastlea_d_ps_0_full.webp",
            "max": [
              3,
              4
            ]
          },
          {
            "id": 3,
            "url": "/tiles/ruined_castle/lv_fat_ocastlea_d_ps_3_{y}x{x}.webp",
            "full": "/tiles/ruined_castle/lv_fat_ocastlea_d_ps_3_full.webp",
            "max": [
              3,
              4
            ]
          },
          {
            "id": 4,
            "url": "/tiles/ruined_castle/lv_fat_ocastlea_d_ps_4_{y}x{x}.webp",
            "full": "/tiles/ruined_castle/lv_fat_ocastlea_d_ps_4_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Cave of Sin",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/cave_of_sin/lv_fat_caves_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/cave_of_sin/lv_fat_caves_d_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Dark Rain Plains",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/dark_rain_plains/lv_fat_brainp_i_ps_0_{y}x{x}.webp",
            "full": "/tiles/dark_rain_plains/lv_fat_brainp_i_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Secret Dungeon",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/secret_dungeon/lv_scd_faten_ps_0_{y}x{x}.webp",
            "full": "/tiles/secret_dungeon/lv_scd_faten_ps_0_full.webp",
            "max": [
              14,
              20
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Tortoyk",
    "areas": [
      {
        "name": "Mokoko Village",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/mokoko_village/lv_tot_movillage_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/mokoko_village/lv_tot_movillage_t_ps_0_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 7,
            "url": "/tiles/mokoko_village/lv_tot_movillage_t_ps_7_{y}x{x}.webp",
            "full": "/tiles/mokoko_village/lv_tot_movillage_t_ps_7_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Seaswept Woods",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/seaswept_woods/lv_tot_toforest_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/seaswept_woods/lv_tot_toforest_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Sweetwater Forest",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/sweetwater_forest/lv_tot_moforest_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/sweetwater_forest/lv_tot_moforest_f_ps_2_full.webp",
            "max": [
              7,
              7
            ]
          }
        ]
      },
      {
        "name": "Skyreach Steppe",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/skyreach_steppe/lv_tot_roforest_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/skyreach_steppe/lv_tot_roforest_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Forest of Giants",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/forest_of_giants/lv_tot_giforest_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/forest_of_giants/lv_tot_giforest_f_ps_0_full.webp",
            "max": [
              8,
              8
            ]
          }
        ]
      },
      {
        "name": "Tortoyk Parapara Cruise",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/tortoyk_parapara_cruise/lv_tot_toforest_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/tortoyk_parapara_cruise/lv_tot_toforest_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Pirate Den",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/pirate_den/lv_tot_pirateden_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/pirate_den/lv_tot_pirateden_d_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Tortoyk's Heart",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/tortoyks_heart/lv_tot_intortoyk_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/tortoyks_heart/lv_tot_intortoyk_d_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Secret Dungeon",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/secret_dungeon/lv_scd_tortoyk_ps_1_{y}x{x}.webp",
            "full": "/tiles/secret_dungeon/lv_scd_tortoyk_ps_1_full.webp",
            "max": [
              10,
              13
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "North Vern",
    "areas": [
      {
        "name": "Rania Village",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/rania_village/lv_ber_raniat_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/rania_village/lv_ber_raniat_t_ps_0_full.webp",
            "max": [
              3,
              4
            ]
          },
          {
            "id": 1,
            "url": "/tiles/rania_village/lv_ber_raniat_t_ps_1_{y}x{x}.webp",
            "full": "/tiles/rania_village/lv_ber_raniat_t_ps_1_full.webp",
            "max": [
              4,
              5
            ]
          },
          {
            "id": 2,
            "url": "/tiles/rania_village/lv_ber_raniat_t_ps_2_{y}x{x}.webp",
            "full": "/tiles/rania_village/lv_ber_raniat_t_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 4,
            "url": "/tiles/rania_village/lv_ber_raniat_t_ps_4_{y}x{x}.webp",
            "full": "/tiles/rania_village/lv_ber_raniat_t_ps_4_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/rania_village/lv_ber_raniat_t_ps_5_{y}x{x}.webp",
            "full": "/tiles/rania_village/lv_ber_raniat_t_ps_5_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 6,
            "url": "/tiles/rania_village/lv_ber_raniat_t_ps_6_{y}x{x}.webp",
            "full": "/tiles/rania_village/lv_ber_raniat_t_ps_6_full.webp",
            "max": [
              4,
              3
            ]
          },
          {
            "id": 7,
            "url": "/tiles/rania_village/lv_ber_raniat_t_ps_7_{y}x{x}.webp",
            "full": "/tiles/rania_village/lv_ber_raniat_t_ps_7_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 8,
            "url": "/tiles/rania_village/lv_ber_raniat_t_ps_8_{y}x{x}.webp",
            "full": "/tiles/rania_village/lv_ber_raniat_t_ps_8_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 10,
            "url": "/tiles/rania_village/lv_ber_raniat_t_ps_10_{y}x{x}.webp",
            "full": "/tiles/rania_village/lv_ber_raniat_t_ps_10_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Vern Castle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/vern_castle/lv_ber_berncastle_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/vern_castle/lv_ber_berncastle_t_ps_0_full.webp",
            "max": [
              5,
              5
            ]
          },
          {
            "id": 1,
            "url": "/tiles/vern_castle/lv_ber_berncastle_t_ps_1_{y}x{x}.webp",
            "full": "/tiles/vern_castle/lv_ber_berncastle_t_ps_1_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/vern_castle/lv_ber_berncastle_t_ps_2_{y}x{x}.webp",
            "full": "/tiles/vern_castle/lv_ber_berncastle_t_ps_2_full.webp",
            "max": [
              6,
              5
            ]
          },
          {
            "id": 3,
            "url": "/tiles/vern_castle/lv_ber_berncastle_t_ps_3_{y}x{x}.webp",
            "full": "/tiles/vern_castle/lv_ber_berncastle_t_ps_3_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 5,
            "url": "/tiles/vern_castle/lv_ber_berncastle_t_ps_5_{y}x{x}.webp",
            "full": "/tiles/vern_castle/lv_ber_berncastle_t_ps_5_full.webp",
            "max": [
              3,
              4
            ]
          },
          {
            "id": 6,
            "url": "/tiles/vern_castle/lv_ber_berncastle_t_ps_6_{y}x{x}.webp",
            "full": "/tiles/vern_castle/lv_ber_berncastle_t_ps_6_full.webp",
            "max": [
              5,
              5
            ]
          },
          {
            "id": 7,
            "url": "/tiles/vern_castle/lv_ber_berncastle_t_ps_7_{y}x{x}.webp",
            "full": "/tiles/vern_castle/lv_ber_berncastle_t_ps_7_full.webp",
            "max": [
              4,
              5
            ]
          },
          {
            "id": 8,
            "url": "/tiles/vern_castle/lv_ber_berncastle_t_ps_8_{y}x{x}.webp",
            "full": "/tiles/vern_castle/lv_ber_berncastle_t_ps_8_full.webp",
            "max": [
              6,
              5
            ]
          },
          {
            "id": 9,
            "url": "/tiles/vern_castle/lv_ber_berncastle_t_ps_9_{y}x{x}.webp",
            "full": "/tiles/vern_castle/lv_ber_berncastle_t_ps_9_full.webp",
            "max": [
              7,
              11
            ]
          },
          {
            "id": 11,
            "url": "/tiles/vern_castle/lv_ber_berncastle_t_ps_11_{y}x{x}.webp",
            "full": "/tiles/vern_castle/lv_ber_berncastle_t_ps_11_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 12,
            "url": "/tiles/vern_castle/lv_ber_berncastle_t_ps_12_{y}x{x}.webp",
            "full": "/tiles/vern_castle/lv_ber_berncastle_t_ps_12_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 14,
            "url": "/tiles/vern_castle/lv_ber_berncastle_t_ps_14_{y}x{x}.webp",
            "full": "/tiles/vern_castle/lv_ber_berncastle_t_ps_14_full.webp",
            "max": [
              3,
              2
            ]
          }
        ]
      },
      {
        "name": "Port Krona",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/port_krona/lv_ber_kronap_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/port_krona/lv_ber_kronap_f_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/port_krona/lv_ber_kronap_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/port_krona/lv_ber_kronap_f_ps_1_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Parna Forest",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/parna_forest/lv_ber_parna_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/parna_forest/lv_ber_parna_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Fesnar Highland",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/fesnar_highland/lv_ber_fesnar_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/fesnar_highland/lv_ber_fesnar_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Vernese Forest",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/vernese_forest/lv_ber_bernilf_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/vernese_forest/lv_ber_bernilf_f_ps_0_full.webp",
            "max": [
              7,
              7
            ]
          }
        ]
      },
      {
        "name": "Balankar Mountains",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/balankar_mountains/lv_ber_valankarm_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/balankar_mountains/lv_ber_valankarm_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Anemos",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/anemos/lv_ber_kronap_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/anemos/lv_ber_kronap_f_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/anemos/lv_ber_kronap_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/anemos/lv_ber_kronap_f_ps_1_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Gorgon's Nest",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/gorgons_nest/lv_ber_gorgonn_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/gorgons_nest/lv_ber_gorgonn_d_ps_0_full.webp",
            "max": [
              5,
              5
            ]
          }
        ]
      },
      {
        "name": "Ancient Elveria",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/ancient_elveria/lv_ber_elveria_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/ancient_elveria/lv_ber_elveria_d_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Secret Dungeon",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/secret_dungeon/lv_scd_bern_ps_0_{y}x{x}.webp",
            "full": "/tiles/secret_dungeon/lv_scd_bern_ps_0_full.webp",
            "max": [
              10,
              25
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Yorn",
    "areas": [
      {
        "name": "Great Castle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/great_castle/lv_yor_greatcs_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/great_castle/lv_yor_greatcs_t_ps_0_full.webp",
            "max": [
              2,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/great_castle/lv_yor_greatcs_t_ps_1_{y}x{x}.webp",
            "full": "/tiles/great_castle/lv_yor_greatcs_t_ps_1_full.webp",
            "max": [
              3,
              4
            ]
          },
          {
            "id": 2,
            "url": "/tiles/great_castle/lv_yor_greatcs_t_ps_2_{y}x{x}.webp",
            "full": "/tiles/great_castle/lv_yor_greatcs_t_ps_2_full.webp",
            "max": [
              4,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/great_castle/lv_yor_greatcs_t_ps_3_{y}x{x}.webp",
            "full": "/tiles/great_castle/lv_yor_greatcs_t_ps_3_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 4,
            "url": "/tiles/great_castle/lv_yor_greatcs_t_ps_4_{y}x{x}.webp",
            "full": "/tiles/great_castle/lv_yor_greatcs_t_ps_4_full.webp",
            "max": [
              4,
              5
            ]
          },
          {
            "id": 5,
            "url": "/tiles/great_castle/lv_yor_greatcs_t_ps_5_{y}x{x}.webp",
            "full": "/tiles/great_castle/lv_yor_greatcs_t_ps_5_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 7,
            "url": "/tiles/great_castle/lv_yor_greatcs_t_ps_7_{y}x{x}.webp",
            "full": "/tiles/great_castle/lv_yor_greatcs_t_ps_7_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 8,
            "url": "/tiles/great_castle/lv_yor_greatcs_t_ps_8_{y}x{x}.webp",
            "full": "/tiles/great_castle/lv_yor_greatcs_t_ps_8_full.webp",
            "max": [
              4,
              3
            ]
          },
          {
            "id": 9,
            "url": "/tiles/great_castle/lv_yor_greatcs_t_ps_9_{y}x{x}.webp",
            "full": "/tiles/great_castle/lv_yor_greatcs_t_ps_9_full.webp",
            "max": [
              4,
              5
            ]
          }
        ]
      },
      {
        "name": "Yorn's Cradle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/yorns_cradle/lv_yor_lbeginning_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/yorns_cradle/lv_yor_lbeginning_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 1,
            "url": "/tiles/yorns_cradle/lv_yor_lbeginning_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/yorns_cradle/lv_yor_lbeginning_f_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 2,
            "url": "/tiles/yorns_cradle/lv_yor_lbeginning_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/yorns_cradle/lv_yor_lbeginning_f_ps_2_full.webp",
            "max": [
              2,
              1
            ]
          },
          {
            "id": 3,
            "url": "/tiles/yorns_cradle/lv_yor_lbeginning_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/yorns_cradle/lv_yor_lbeginning_f_ps_3_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 4,
            "url": "/tiles/yorns_cradle/lv_yor_lbeginning_f_ps_4_{y}x{x}.webp",
            "full": "/tiles/yorns_cradle/lv_yor_lbeginning_f_ps_4_full.webp",
            "max": [
              8,
              8
            ]
          }
        ]
      },
      {
        "name": "Unfinished Garden",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/unfinished_garden/lv_yor_ugarden_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/unfinished_garden/lv_yor_ugarden_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 1,
            "url": "/tiles/unfinished_garden/lv_yor_ugarden_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/unfinished_garden/lv_yor_ugarden_f_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/unfinished_garden/lv_yor_ugarden_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/unfinished_garden/lv_yor_ugarden_f_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Black Anvil Mine",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/black_anvil_mine/lv_yor_firstwp_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/black_anvil_mine/lv_yor_firstwp_f_ps_0_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/black_anvil_mine/lv_yor_firstwp_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/black_anvil_mine/lv_yor_firstwp_f_ps_1_full.webp",
            "max": [
              7,
              7
            ]
          },
          {
            "id": 2,
            "url": "/tiles/black_anvil_mine/lv_yor_firstwp_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/black_anvil_mine/lv_yor_firstwp_f_ps_2_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/black_anvil_mine/lv_yor_firstwp_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/black_anvil_mine/lv_yor_firstwp_f_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Iron Hammer Mine",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/iron_hammer_mine/lv_yor_secondwp_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/iron_hammer_mine/lv_yor_secondwp_f_ps_0_full.webp",
            "max": [
              7,
              7
            ]
          },
          {
            "id": 1,
            "url": "/tiles/iron_hammer_mine/lv_yor_secondwp_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/iron_hammer_mine/lv_yor_secondwp_f_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/iron_hammer_mine/lv_yor_secondwp_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/iron_hammer_mine/lv_yor_secondwp_f_ps_2_full.webp",
            "max": [
              2,
              1
            ]
          }
        ]
      },
      {
        "name": "Hall of Promise",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/hall_of_promise/lv_yor_lpromise_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/hall_of_promise/lv_yor_lpromise_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 1,
            "url": "/tiles/hall_of_promise/lv_yor_lpromise_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/hall_of_promise/lv_yor_lpromise_f_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/hall_of_promise/lv_yor_lpromise_f_ps_4_{y}x{x}.webp",
            "full": "/tiles/hall_of_promise/lv_yor_lpromise_f_ps_4_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 5,
            "url": "/tiles/hall_of_promise/lv_yor_lpromise_f_ps_5_{y}x{x}.webp",
            "full": "/tiles/hall_of_promise/lv_yor_lpromise_f_ps_5_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Scorched Ship",
        "tiles": [
          {
            "id": 3,
            "url": "/tiles/scorched_ship/lv_yor_scorchedsp_i_ps_3_{y}x{x}.webp",
            "full": "/tiles/scorched_ship/lv_yor_scorchedsp_i_ps_3_full.webp",
            "max": [
              3,
              2
            ]
          }
        ]
      },
      {
        "name": "Jewelry Storage",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/jewelry_storage/lv_yor_jewelah_i_ps_1_{y}x{x}.webp",
            "full": "/tiles/jewelry_storage/lv_yor_jewelah_i_ps_1_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Giant Whirlpool",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/giant_whirlpool/lv_yor_secondwpgv_i_ps_0_{y}x{x}.webp",
            "full": "/tiles/giant_whirlpool/lv_yor_secondwpgv_i_ps_0_full.webp",
            "max": [
              7,
              7
            ]
          }
        ]
      },
      {
        "name": "Umar Sculpture",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/umar_sculpture/lv_yor_lpromisegu_i_ps_0_{y}x{x}.webp",
            "full": "/tiles/umar_sculpture/lv_yor_lpromisegu_i_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "The Seasmith",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/the_seasmith/lv_yor_lbeginning_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/the_seasmith/lv_yor_lbeginning_f_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 1,
            "url": "/tiles/the_seasmith/lv_yor_lbeginning_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/the_seasmith/lv_yor_lbeginning_f_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 2,
            "url": "/tiles/the_seasmith/lv_yor_lbeginning_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/the_seasmith/lv_yor_lbeginning_f_ps_2_full.webp",
            "max": [
              2,
              1
            ]
          },
          {
            "id": 3,
            "url": "/tiles/the_seasmith/lv_yor_lbeginning_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/the_seasmith/lv_yor_lbeginning_f_ps_3_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 4,
            "url": "/tiles/the_seasmith/lv_yor_lbeginning_f_ps_4_{y}x{x}.webp",
            "full": "/tiles/the_seasmith/lv_yor_lbeginning_f_ps_4_full.webp",
            "max": [
              8,
              8
            ]
          }
        ]
      },
      {
        "name": "Wonderful Brewery",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/wonderful_brewery/lv_yor_awesomeb_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/wonderful_brewery/lv_yor_awesomeb_d_ps_0_full.webp",
            "max": [
              4,
              5
            ]
          },
          {
            "id": 1,
            "url": "/tiles/wonderful_brewery/lv_yor_awesomeb_d_ps_1_{y}x{x}.webp",
            "full": "/tiles/wonderful_brewery/lv_yor_awesomeb_d_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Ark of Arrogance",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/ark_of_arrogance/lv_yor_arroganta_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/ark_of_arrogance/lv_yor_arroganta_d_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 1,
            "url": "/tiles/ark_of_arrogance/lv_yor_arroganta_d_ps_1_{y}x{x}.webp",
            "full": "/tiles/ark_of_arrogance/lv_yor_arroganta_d_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Secret Dungeon",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/secret_dungeon/lv_scd_yorn_ps_0_{y}x{x}.webp",
            "full": "/tiles/secret_dungeon/lv_scd_yorn_ps_0_full.webp",
            "max": [
              15,
              39
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Punika",
    "areas": [
      {
        "name": "Nia Village",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/nia_village/lv_pap_niatown_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/nia_village/lv_pap_niatown_t_ps_0_full.webp",
            "max": [
              6,
              5
            ]
          },
          {
            "id": 1,
            "url": "/tiles/nia_village/lv_pap_niatown_t_ps_1_{y}x{x}.webp",
            "full": "/tiles/nia_village/lv_pap_niatown_t_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/nia_village/lv_pap_niatown_t_ps_2_{y}x{x}.webp",
            "full": "/tiles/nia_village/lv_pap_niatown_t_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 3,
            "url": "/tiles/nia_village/lv_pap_niatown_t_ps_3_{y}x{x}.webp",
            "full": "/tiles/nia_village/lv_pap_niatown_t_ps_3_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 4,
            "url": "/tiles/nia_village/lv_pap_niatown_t_ps_4_{y}x{x}.webp",
            "full": "/tiles/nia_village/lv_pap_niatown_t_ps_4_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 5,
            "url": "/tiles/nia_village/lv_pap_niatown_t_ps_5_{y}x{x}.webp",
            "full": "/tiles/nia_village/lv_pap_niatown_t_ps_5_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 6,
            "url": "/tiles/nia_village/lv_pap_niatown_t_ps_6_{y}x{x}.webp",
            "full": "/tiles/nia_village/lv_pap_niatown_t_ps_6_full.webp",
            "max": [
              4,
              3
            ]
          }
        ]
      },
      {
        "name": "Tideshelf Path",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/tideshelf_path/lv_pap_scoast_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/tideshelf_path/lv_pap_scoast_f_ps_0_full.webp",
            "max": [
              5,
              5
            ]
          },
          {
            "id": 1,
            "url": "/tiles/tideshelf_path/lv_pap_scoast_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/tideshelf_path/lv_pap_scoast_f_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/tideshelf_path/lv_pap_scoast_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/tideshelf_path/lv_pap_scoast_f_ps_2_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 3,
            "url": "/tiles/tideshelf_path/lv_pap_scoast_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/tideshelf_path/lv_pap_scoast_f_ps_3_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 4,
            "url": "/tiles/tideshelf_path/lv_pap_scoast_f_ps_4_{y}x{x}.webp",
            "full": "/tiles/tideshelf_path/lv_pap_scoast_f_ps_4_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 5,
            "url": "/tiles/tideshelf_path/lv_pap_scoast_f_ps_5_{y}x{x}.webp",
            "full": "/tiles/tideshelf_path/lv_pap_scoast_f_ps_5_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 6,
            "url": "/tiles/tideshelf_path/lv_pap_scoast_f_ps_6_{y}x{x}.webp",
            "full": "/tiles/tideshelf_path/lv_pap_scoast_f_ps_6_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Starsand Beach",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/starsand_beach/lv_pap_starsb_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/starsand_beach/lv_pap_starsb_f_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/starsand_beach/lv_pap_starsb_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/starsand_beach/lv_pap_starsb_f_ps_1_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 2,
            "url": "/tiles/starsand_beach/lv_pap_starsb_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/starsand_beach/lv_pap_starsb_f_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Tikatika Colony",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/tikatika_colony/lv_pap_ticac_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/tikatika_colony/lv_pap_ticac_f_ps_0_full.webp",
            "max": [
              5,
              5
            ]
          },
          {
            "id": 1,
            "url": "/tiles/tikatika_colony/lv_pap_ticac_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/tikatika_colony/lv_pap_ticac_f_ps_1_full.webp",
            "max": [
              4,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/tikatika_colony/lv_pap_ticac_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/tikatika_colony/lv_pap_ticac_f_ps_2_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 3,
            "url": "/tiles/tikatika_colony/lv_pap_ticac_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/tikatika_colony/lv_pap_ticac_f_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Secret Forest",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/secret_forest/lv_pap_sforest_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/secret_forest/lv_pap_sforest_f_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 1,
            "url": "/tiles/secret_forest/lv_pap_sforest_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/secret_forest/lv_pap_sforest_f_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/secret_forest/lv_pap_sforest_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/secret_forest/lv_pap_sforest_f_ps_2_full.webp",
            "max": [
              2,
              4
            ]
          }
        ]
      },
      {
        "name": "Punika Kleanoi",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/punika_kleanoi/lv_pap_scoast_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/punika_kleanoi/lv_pap_scoast_f_ps_0_full.webp",
            "max": [
              5,
              5
            ]
          },
          {
            "id": 1,
            "url": "/tiles/punika_kleanoi/lv_pap_scoast_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/punika_kleanoi/lv_pap_scoast_f_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/punika_kleanoi/lv_pap_scoast_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/punika_kleanoi/lv_pap_scoast_f_ps_2_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 3,
            "url": "/tiles/punika_kleanoi/lv_pap_scoast_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/punika_kleanoi/lv_pap_scoast_f_ps_3_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 4,
            "url": "/tiles/punika_kleanoi/lv_pap_scoast_f_ps_4_{y}x{x}.webp",
            "full": "/tiles/punika_kleanoi/lv_pap_scoast_f_ps_4_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 5,
            "url": "/tiles/punika_kleanoi/lv_pap_scoast_f_ps_5_{y}x{x}.webp",
            "full": "/tiles/punika_kleanoi/lv_pap_scoast_f_ps_5_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 6,
            "url": "/tiles/punika_kleanoi/lv_pap_scoast_f_ps_6_{y}x{x}.webp",
            "full": "/tiles/punika_kleanoi/lv_pap_scoast_f_ps_6_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Tranquil Inath Cliff",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/tranquil_inath_cliff/lv_pap_starsb_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/tranquil_inath_cliff/lv_pap_starsb_f_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/tranquil_inath_cliff/lv_pap_starsb_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/tranquil_inath_cliff/lv_pap_starsb_f_ps_1_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 2,
            "url": "/tiles/tranquil_inath_cliff/lv_pap_starsb_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/tranquil_inath_cliff/lv_pap_starsb_f_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Tropical Fruit Orchard",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/tropical_fruit_orchard/lv_pap_starsb_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/tropical_fruit_orchard/lv_pap_starsb_f_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/tropical_fruit_orchard/lv_pap_starsb_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/tropical_fruit_orchard/lv_pap_starsb_f_ps_1_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 2,
            "url": "/tiles/tropical_fruit_orchard/lv_pap_starsb_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/tropical_fruit_orchard/lv_pap_starsb_f_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Sleepy Hot Spring Bath",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/sleepy_hot_spring_bath/lv_pap_starsb_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/sleepy_hot_spring_bath/lv_pap_starsb_f_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/sleepy_hot_spring_bath/lv_pap_starsb_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/sleepy_hot_spring_bath/lv_pap_starsb_f_ps_1_full.webp",
            "max": [
              6,
              6
            ]
          },
          {
            "id": 2,
            "url": "/tiles/sleepy_hot_spring_bath/lv_pap_starsb_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/sleepy_hot_spring_bath/lv_pap_starsb_f_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Inside the Western Garden",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/inside_the_western_garden/lv_pap_niatown_t_ps_0_{y}x{x}.webp",
            "full": "/tiles/inside_the_western_garden/lv_pap_niatown_t_ps_0_full.webp",
            "max": [
              6,
              5
            ]
          },
          {
            "id": 1,
            "url": "/tiles/inside_the_western_garden/lv_pap_niatown_t_ps_1_{y}x{x}.webp",
            "full": "/tiles/inside_the_western_garden/lv_pap_niatown_t_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/inside_the_western_garden/lv_pap_niatown_t_ps_2_{y}x{x}.webp",
            "full": "/tiles/inside_the_western_garden/lv_pap_niatown_t_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 3,
            "url": "/tiles/inside_the_western_garden/lv_pap_niatown_t_ps_3_{y}x{x}.webp",
            "full": "/tiles/inside_the_western_garden/lv_pap_niatown_t_ps_3_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 4,
            "url": "/tiles/inside_the_western_garden/lv_pap_niatown_t_ps_4_{y}x{x}.webp",
            "full": "/tiles/inside_the_western_garden/lv_pap_niatown_t_ps_4_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 5,
            "url": "/tiles/inside_the_western_garden/lv_pap_niatown_t_ps_5_{y}x{x}.webp",
            "full": "/tiles/inside_the_western_garden/lv_pap_niatown_t_ps_5_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 6,
            "url": "/tiles/inside_the_western_garden/lv_pap_niatown_t_ps_6_{y}x{x}.webp",
            "full": "/tiles/inside_the_western_garden/lv_pap_niatown_t_ps_6_full.webp",
            "max": [
              4,
              3
            ]
          }
        ]
      },
      {
        "name": "Mellow Beach",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/mellow_beach/lv_pap_scoast_f_ps_0_{y}x{x}.webp",
            "full": "/tiles/mellow_beach/lv_pap_scoast_f_ps_0_full.webp",
            "max": [
              5,
              5
            ]
          },
          {
            "id": 1,
            "url": "/tiles/mellow_beach/lv_pap_scoast_f_ps_1_{y}x{x}.webp",
            "full": "/tiles/mellow_beach/lv_pap_scoast_f_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/mellow_beach/lv_pap_scoast_f_ps_2_{y}x{x}.webp",
            "full": "/tiles/mellow_beach/lv_pap_scoast_f_ps_2_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 3,
            "url": "/tiles/mellow_beach/lv_pap_scoast_f_ps_3_{y}x{x}.webp",
            "full": "/tiles/mellow_beach/lv_pap_scoast_f_ps_3_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 4,
            "url": "/tiles/mellow_beach/lv_pap_scoast_f_ps_4_{y}x{x}.webp",
            "full": "/tiles/mellow_beach/lv_pap_scoast_f_ps_4_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 5,
            "url": "/tiles/mellow_beach/lv_pap_scoast_f_ps_5_{y}x{x}.webp",
            "full": "/tiles/mellow_beach/lv_pap_scoast_f_ps_5_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 6,
            "url": "/tiles/mellow_beach/lv_pap_scoast_f_ps_6_{y}x{x}.webp",
            "full": "/tiles/mellow_beach/lv_pap_scoast_f_ps_6_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Naruna Hot Springs",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/naruna_hot_springs/lv_pap_naskas_d_ps_2_{y}x{x}.webp",
            "full": "/tiles/naruna_hot_springs/lv_pap_naskas_d_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 3,
            "url": "/tiles/naruna_hot_springs/lv_pap_naskas_d_ps_3_{y}x{x}.webp",
            "full": "/tiles/naruna_hot_springs/lv_pap_naskas_d_ps_3_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Oreha's Well",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/orehas_well/lv_pap_orehaw_d_ps_0_{y}x{x}.webp",
            "full": "/tiles/orehas_well/lv_pap_orehaw_d_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/orehas_well/lv_pap_orehaw_d_ps_1_{y}x{x}.webp",
            "full": "/tiles/orehas_well/lv_pap_orehaw_d_ps_1_full.webp",
            "max": [
              4,
              8
            ]
          },
          {
            "id": 2,
            "url": "/tiles/orehas_well/lv_pap_orehaw_d_ps_2_{y}x{x}.webp",
            "full": "/tiles/orehas_well/lv_pap_orehaw_d_ps_2_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 5,
            "url": "/tiles/orehas_well/lv_pap_orehaw_d_ps_5_{y}x{x}.webp",
            "full": "/tiles/orehas_well/lv_pap_orehaw_d_ps_5_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 6,
            "url": "/tiles/orehas_well/lv_pap_orehaw_d_ps_6_{y}x{x}.webp",
            "full": "/tiles/orehas_well/lv_pap_orehaw_d_ps_6_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Arkesia",
    "areas": [
      {
        "name": "Nahun's Domain",
        "tiles": [
          {
            "id": 3,
            "url": "/tiles/nahuns_domain/lv_mod_platinuara_ps_3_{y}x{x}.webp",
            "full": "/tiles/nahuns_domain/lv_mod_platinuara_ps_3_full.webp",
            "max": [
              5,
              5
            ]
          }
        ]
      },
      {
        "name": "Old Yudian Canal",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/old_yudian_canal/lv_mod_platinuarab_ps_0_{y}x{x}.webp",
            "full": "/tiles/old_yudian_canal/lv_mod_platinuarab_ps_0_full.webp",
            "max": [
              5,
              5
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Unsorted",
    "areas": [
      {
        "name": "Silent Hall",
        "tiles": [
          {
            "id": 5,
            "url": "/tiles/silent_hall/lv_mod_bossrush_01_ps_5_{y}x{x}.webp",
            "full": "/tiles/silent_hall/lv_mod_bossrush_01_ps_5_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 6,
            "url": "/tiles/silent_hall/lv_mod_bossrush_01_ps_6_{y}x{x}.webp",
            "full": "/tiles/silent_hall/lv_mod_bossrush_01_ps_6_full.webp",
            "max": [
              2,
              1
            ]
          }
        ]
      },
      {
        "name": "Hall of the Sun",
        "tiles": [
          {
            "id": 5,
            "url": "/tiles/hall_of_the_sun/lv_mod_bossrush_02_ps_5_{y}x{x}.webp",
            "full": "/tiles/hall_of_the_sun/lv_mod_bossrush_02_ps_5_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 6,
            "url": "/tiles/hall_of_the_sun/lv_mod_bossrush_02_ps_6_{y}x{x}.webp",
            "full": "/tiles/hall_of_the_sun/lv_mod_bossrush_02_ps_6_full.webp",
            "max": [
              2,
              1
            ]
          }
        ]
      },
      {
        "name": "Golden Eagle Battlefield",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/golden_eagle_battlefield/lv_battle_battlek_ps_0_{y}x{x}.webp",
            "full": "/tiles/golden_eagle_battlefield/lv_battle_battlek_ps_0_full.webp",
            "max": [
              2,
              1
            ]
          }
        ]
      },
      {
        "name": "Blue Dragon Territory",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/blue_dragon_territory/lv_battle_dtarena_ps_0_{y}x{x}.webp",
            "full": "/tiles/blue_dragon_territory/lv_battle_dtarena_ps_0_full.webp",
            "max": [
              2,
              1
            ]
          }
        ]
      },
      {
        "name": "Ironlands",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/ironlands/lv_battle_rtheide_ps_0_{y}x{x}.webp",
            "full": "/tiles/ironlands/lv_battle_rtheide_ps_0_full.webp",
            "max": [
              3,
              2
            ]
          }
        ]
      },
      {
        "name": "Co-op Fortress Battle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/co-op_fortress_battle/lv_battle_nergalsh_ps_0_{y}x{x}.webp",
            "full": "/tiles/co-op_fortress_battle/lv_battle_nergalsh_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Guild War",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/guild_war/lv_battle_battlek_ps_0_{y}x{x}.webp",
            "full": "/tiles/guild_war/lv_battle_battlek_ps_0_full.webp",
            "max": [
              2,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/guild_war/lv_battle_dtarena_ps_0_{y}x{x}.webp",
            "full": "/tiles/guild_war/lv_battle_dtarena_ps_0_full.webp",
            "max": [
              2,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/guild_war/lv_battle_rtheide_ps_0_{y}x{x}.webp",
            "full": "/tiles/guild_war/lv_battle_rtheide_ps_0_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/guild_war/lv_battle_battlefir_ps_0_{y}x{x}.webp",
            "full": "/tiles/guild_war/lv_battle_battlefir_ps_0_full.webp",
            "max": [
              2,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/guild_war/lv_battle_battledes_ps_0_{y}x{x}.webp",
            "full": "/tiles/guild_war/lv_battle_battledes_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/guild_war/lv_battle_battledes_ps_1_{y}x{x}.webp",
            "full": "/tiles/guild_war/lv_battle_battledes_ps_1_full.webp",
            "max": [
              2,
              1
            ]
          }
        ]
      },
      {
        "name": "Fortress Battle",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/fortress_battle/lv_battle_nergalsh_ps_0_{y}x{x}.webp",
            "full": "/tiles/fortress_battle/lv_battle_nergalsh_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Raid Match",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/raid_match/lv_battle_forestcs_ps_0_{y}x{x}.webp",
            "full": "/tiles/raid_match/lv_battle_forestcs_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/raid_match/lv_battle_rareap77_ps_1_{y}x{x}.webp",
            "full": "/tiles/raid_match/lv_battle_rareap77_ps_1_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 0,
            "url": "/tiles/raid_match/lv_battle_sfground_ps_0_{y}x{x}.webp",
            "full": "/tiles/raid_match/lv_battle_sfground_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/raid_match/lv_battle_forbiddens_ps_0_{y}x{x}.webp",
            "full": "/tiles/raid_match/lv_battle_forbiddens_ps_0_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 0,
            "url": "/tiles/raid_match/lv_battle_shadeos_ps_0_{y}x{x}.webp",
            "full": "/tiles/raid_match/lv_battle_shadeos_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Siege of Volare Island",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/siege_of_volare_island/lv_battle_battleff_ps_0_{y}x{x}.webp",
            "full": "/tiles/siege_of_volare_island/lv_battle_battleff_ps_0_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Nameless Territory",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/nameless_territory/lv_twn_base00_i_ps_0_{y}x{x}.webp",
            "full": "/tiles/nameless_territory/lv_twn_base00_i_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/nameless_territory/lv_twn_base00_i_ps_5_{y}x{x}.webp",
            "full": "/tiles/nameless_territory/lv_twn_base00_i_ps_5_full.webp",
            "max": [
              4,
              5
            ]
          }
        ]
      },
      {
        "name": "Frost Haven",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/frost_haven/lv_rad_haofcold_ps_1_{y}x{x}.webp",
            "full": "/tiles/frost_haven/lv_rad_haofcold_ps_1_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Foggy Ridge",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/foggy_ridge/lv_rad_densefog_ps_0_{y}x{x}.webp",
            "full": "/tiles/foggy_ridge/lv_rad_densefog_ps_0_full.webp",
            "max": [
              4,
              3
            ]
          }
        ]
      },
      {
        "name": "Red Sand Desert",
        "tiles": [
          {
            "id": 2,
            "url": "/tiles/red_sand_desert/lv_rad_redsanddst_ps_2_{y}x{x}.webp",
            "full": "/tiles/red_sand_desert/lv_rad_redsanddst_ps_2_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Scarred Crimson Land",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/scarred_crimson_land/lv_rad_drlands_ps_1_{y}x{x}.webp",
            "full": "/tiles/scarred_crimson_land/lv_rad_drlands_ps_1_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Woeful Drylands",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/woeful_drylands/lv_rad_landdrysc_ps_0_{y}x{x}.webp",
            "full": "/tiles/woeful_drylands/lv_rad_landdrysc_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Sea of Indolence",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/sea_of_indolence/lv_ocn_gatepara_c_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/sea_of_indolence/lv_ocn_gatepara_c_01_ps_0_full.webp",
            "max": [
              4,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/sea_of_indolence/lv_ocn_gatepara_c_01_ps_1_{y}x{x}.webp",
            "full": "/tiles/sea_of_indolence/lv_ocn_gatepara_c_01_ps_1_full.webp",
            "max": [
              3,
              4
            ]
          },
          {
            "id": 5,
            "url": "/tiles/sea_of_indolence/lv_ocn_gatepara_c_01_ps_5_{y}x{x}.webp",
            "full": "/tiles/sea_of_indolence/lv_ocn_gatepara_c_01_ps_5_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Tranquil Karkosa",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/tranquil_karkosa/lv_ocn_gatepara_c_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/tranquil_karkosa/lv_ocn_gatepara_c_02_ps_0_full.webp",
            "max": [
              3,
              5
            ]
          },
          {
            "id": 1,
            "url": "/tiles/tranquil_karkosa/lv_ocn_gatepara_c_02_ps_1_{y}x{x}.webp",
            "full": "/tiles/tranquil_karkosa/lv_ocn_gatepara_c_02_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          }
        ]
      },
      {
        "name": "Alaric's Sanctuary",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/alarics_sanctuary/lv_ocn_gatepara_c_03_ps_0_{y}x{x}.webp",
            "full": "/tiles/alarics_sanctuary/lv_ocn_gatepara_c_03_ps_0_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/alarics_sanctuary/lv_ocn_gatepara_c_03_ps_1_{y}x{x}.webp",
            "full": "/tiles/alarics_sanctuary/lv_ocn_gatepara_c_03_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/alarics_sanctuary/lv_ocn_gatepara_c_03_ps_2_{y}x{x}.webp",
            "full": "/tiles/alarics_sanctuary/lv_ocn_gatepara_c_03_ps_2_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 3,
            "url": "/tiles/alarics_sanctuary/lv_ocn_gatepara_c_03_ps_3_{y}x{x}.webp",
            "full": "/tiles/alarics_sanctuary/lv_ocn_gatepara_c_03_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/alarics_sanctuary/lv_ocn_gatepara_c_03_ps_4_{y}x{x}.webp",
            "full": "/tiles/alarics_sanctuary/lv_ocn_gatepara_c_03_ps_4_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 5,
            "url": "/tiles/alarics_sanctuary/lv_ocn_gatepara_c_03_ps_5_{y}x{x}.webp",
            "full": "/tiles/alarics_sanctuary/lv_ocn_gatepara_c_03_ps_5_full.webp",
            "max": [
              2,
              1
            ]
          },
          {
            "id": 6,
            "url": "/tiles/alarics_sanctuary/lv_ocn_gatepara_c_03_ps_6_{y}x{x}.webp",
            "full": "/tiles/alarics_sanctuary/lv_ocn_gatepara_c_03_ps_6_full.webp",
            "max": [
              7,
              2
            ]
          }
        ]
      },
      {
        "name": "Demon Beast Canyon",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/demon_beast_canyon/lv_ber_elveria_ed_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/demon_beast_canyon/lv_ber_elveria_ed_01_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Necromancer's Origin",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/necromancers_origin/lv_ber_elveria_ed_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/necromancers_origin/lv_ber_elveria_ed_02_ps_0_full.webp",
            "max": [
              6,
              6
            ]
          }
        ]
      },
      {
        "name": "Hall of the Twisted Warlord",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/hall_of_the_twisted_warlord/lv_rhd_palacedp_ed_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/hall_of_the_twisted_warlord/lv_rhd_palacedp_ed_01_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/hall_of_the_twisted_warlord/lv_rhd_palacedp_ed_01_ps_1_{y}x{x}.webp",
            "full": "/tiles/hall_of_the_twisted_warlord/lv_rhd_palacedp_ed_01_ps_1_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/hall_of_the_twisted_warlord/lv_rhd_palacedp_ed_01_ps_2_{y}x{x}.webp",
            "full": "/tiles/hall_of_the_twisted_warlord/lv_rhd_palacedp_ed_01_ps_2_full.webp",
            "max": [
              1,
              2
            ]
          }
        ]
      },
      {
        "name": "Hildebrandt Palace",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_0_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_1_{y}x{x}.webp",
            "full": "/tiles/hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_1_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 2,
            "url": "/tiles/hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_2_{y}x{x}.webp",
            "full": "/tiles/hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_2_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_3_{y}x{x}.webp",
            "full": "/tiles/hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_3_full.webp",
            "max": [
              1,
              2
            ]
          }
        ]
      },
      {
        "name": "Road of Lament",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/road_of_lament/lv_yor_arroganta_ed_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/road_of_lament/lv_yor_arroganta_ed_01_ps_0_full.webp",
            "max": [
              3,
              2
            ]
          }
        ]
      },
      {
        "name": "Forge of Fallen Pride",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/forge_of_fallen_pride/lv_yor_arroganta_ed_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/forge_of_fallen_pride/lv_yor_arroganta_ed_02_ps_0_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 1,
            "url": "/tiles/forge_of_fallen_pride/lv_yor_arroganta_ed_02_ps_1_{y}x{x}.webp",
            "full": "/tiles/forge_of_fallen_pride/lv_yor_arroganta_ed_02_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Aira's Oculus",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/airas_oculus/lv_pap_orehaw_ed_01_ps_1_{y}x{x}.webp",
            "full": "/tiles/airas_oculus/lv_pap_orehaw_ed_01_ps_1_full.webp",
            "max": [
              3,
              4
            ]
          },
          {
            "id": 3,
            "url": "/tiles/airas_oculus/lv_pap_orehaw_ed_01_ps_3_{y}x{x}.webp",
            "full": "/tiles/airas_oculus/lv_pap_orehaw_ed_01_ps_3_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Oreha Preveza",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/oreha_preveza/lv_pap_orehaw_ed_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/oreha_preveza/lv_pap_orehaw_ed_02_ps_0_full.webp",
            "max": [
              3,
              4
            ]
          }
        ]
      },
      {
        "name": "Chaos Dungeon",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_breeze_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_breeze_01_ps_0_full.webp",
            "max": [
              2,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_zenail_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_zenail_01_ps_0_full.webp",
            "max": [
              1,
              3
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_shadeel_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_shadeel_01_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_loghill_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_loghill_01_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_border_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_border_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_rcarena_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_rcarena_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_hillwind_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_hillwind_01_ps_0_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_frozencl_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_frozencl_01_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_parched_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_parched_01_ps_0_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_cracked_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_cracked_01_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_nevel_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_nevel_01_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/chaos_dungeon/lv_rvr_windbring_01_ps_1_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_windbring_01_ps_1_full.webp",
            "max": [
              4,
              4
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_totrichap_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_totrichap_01_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 7,
            "url": "/tiles/chaos_dungeon/lv_rvr_riese_01_ps_7_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_riese_01_ps_7_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_redsanddst_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_redsanddst_01_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_sahill_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_sahill_01_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_ozhill_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_ozhill_01_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/chaos_dungeon/lv_rvr_delphica_01_ps_1_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_delphica_01_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_mirrorva_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_mirrorva_01_ps_0_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 3,
            "url": "/tiles/chaos_dungeon/lv_rvr_twilightm_01_ps_3_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_twilightm_01_ps_3_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/chaos_dungeon/lv_rvr_zamount_01_ps_1_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_zamount_01_ps_1_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 4,
            "url": "/tiles/chaos_dungeon/lv_rvr_lakebar_01_ps_4_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_lakebar_01_ps_4_full.webp",
            "max": [
              1,
              3
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_memonast_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_memonast_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 5,
            "url": "/tiles/chaos_dungeon/lv_rvr_biforest_01_ps_5_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_biforest_01_ps_5_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 6,
            "url": "/tiles/chaos_dungeon/lv_rvr_pofbattle_01_ps_6_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_pofbattle_01_ps_6_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 7,
            "url": "/tiles/chaos_dungeon/lv_rvr_brchurch_01_ps_7_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_brchurch_01_ps_7_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_bodomain_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_bodomain_01_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 8,
            "url": "/tiles/chaos_dungeon/lv_rvr_crseasho_01_ps_8_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_crseasho_01_ps_8_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 9,
            "url": "/tiles/chaos_dungeon/lv_rvr_toforest_01_ps_9_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_toforest_01_ps_9_full.webp",
            "max": [
              3,
              2
            ]
          },
          {
            "id": 10,
            "url": "/tiles/chaos_dungeon/lv_rvr_roforest_01_ps_10_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_roforest_01_ps_10_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 11,
            "url": "/tiles/chaos_dungeon/lv_rvr_giforest_01_ps_11_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_giforest_01_ps_11_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 12,
            "url": "/tiles/chaos_dungeon/lv_rvr_parna_01_ps_12_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_parna_01_ps_12_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_fesnar_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_fesnar_01_ps_0_full.webp",
            "max": [
              2,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_ugarden_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_ugarden_01_ps_0_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_secondwp_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_secondwp_01_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_lpromise_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_lpromise_01_ps_0_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_roforest_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_roforest_02_ps_0_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_delphica_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_delphica_02_ps_0_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_mirrorva_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_mirrorva_02_ps_0_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_redsanddst_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_redsanddst_02_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_hillwind_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_hillwind_02_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/chaos_dungeon/lv_rvr_hillwind_02_ps_1_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_hillwind_02_ps_1_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_hillwind_03_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_hillwind_03_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 2,
            "url": "/tiles/chaos_dungeon/lv_rvr_hillwind_03_ps_2_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_hillwind_03_ps_2_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_hillwind_04_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_hillwind_04_ps_0_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_kronap_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_kronap_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 3,
            "url": "/tiles/chaos_dungeon/lv_rvr_kronap_01_ps_3_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_kronap_01_ps_3_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_fesnar_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_fesnar_02_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_fesnar_03_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_fesnar_03_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_fesnar_04_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_fesnar_04_ps_0_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_valankarm_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_valankarm_01_ps_0_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_silverl_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_silverl_01_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_lotusap_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_lotusap_01_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 1,
            "url": "/tiles/chaos_dungeon/lv_rvr_breeze_02_ps_1_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_breeze_02_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_zenail_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_zenail_02_ps_0_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_firstwp_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_firstwp_01_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_lpromise_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_lpromise_02_ps_0_full.webp",
            "max": [
              2,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_lpromise_03_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_lpromise_03_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 2,
            "url": "/tiles/chaos_dungeon/lv_rvr_lpromise_03_ps_2_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_lpromise_03_ps_2_full.webp",
            "max": [
              2,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_unravin_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_unravin_01_ps_0_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_shcliff_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_shcliff_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 4,
            "url": "/tiles/chaos_dungeon/lv_rvr_shcliff_01_ps_4_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_shcliff_01_ps_4_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_shcliff_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_shcliff_02_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 5,
            "url": "/tiles/chaos_dungeon/lv_rvr_shcliff_02_ps_5_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_shcliff_02_ps_5_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_prmoon_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_prmoon_01_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_prmoon_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_prmoon_02_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_ehrgeiz_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_ehrgeiz_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_gvalley_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_gvalley_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_intortoyk_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_intortoyk_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_elveria_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_elveria_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_firstwp_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_firstwp_02_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_arroganta_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_arroganta_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_ocastle_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_ocastle_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/chaos_dungeon/lv_rvr_lakeisland_01_ps_1_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_lakeisland_01_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_ruinarena_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_ruinarena_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_plateau_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_plateau_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_palacedp_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_palacedp_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_palacedp_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_palacedp_02_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 3,
            "url": "/tiles/chaos_dungeon/lv_rvr_queen_01_ps_3_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_queen_01_ps_3_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_rohendela_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_rohendela_01_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_lbeginning_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_lbeginning_01_ps_0_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_secondwp_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_secondwp_02_ps_0_full.webp",
            "max": [
              2,
              3
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_wailsw_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_wailsw_01_ps_0_full.webp",
            "max": [
              1,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_shcliff_03_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_shcliff_03_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_scoast_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_scoast_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_ticac_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_ticac_01_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_ticac_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_ticac_02_ps_0_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_sforest_01_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_sforest_01_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 5,
            "url": "/tiles/chaos_dungeon/lv_rvr_treasure_01_ps_5_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_treasure_01_ps_5_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/chaos_dungeon/lv_rvr_treasure_02_ps_1_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_treasure_02_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_treasure_03_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_treasure_03_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 7,
            "url": "/tiles/chaos_dungeon/lv_rvr_kandad_01_ps_7_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_kandad_01_ps_7_full.webp",
            "max": [
              1,
              3
            ]
          },
          {
            "id": 2,
            "url": "/tiles/chaos_dungeon/lv_rvr_kandad_02_ps_2_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_kandad_02_ps_2_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/chaos_dungeon/lv_rvr_kandad_03_ps_1_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_kandad_03_ps_1_full.webp",
            "max": [
              2,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/chaos_dungeon/lv_rvr_bellionr_01_ps_1_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_bellionr_01_ps_1_full.webp",
            "max": [
              2,
              2
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_bellionr_02_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_bellionr_02_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_bellionr_03_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_bellionr_03_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 0,
            "url": "/tiles/chaos_dungeon/lv_rvr_bellionr_04_ps_0_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_bellionr_04_ps_0_full.webp",
            "max": [
              1,
              1
            ]
          },
          {
            "id": 1,
            "url": "/tiles/chaos_dungeon/lv_rvr_heigerm_01_ps_1_{y}x{x}.webp",
            "full": "/tiles/chaos_dungeon/lv_rvr_heigerm_01_ps_1_full.webp",
            "max": [
              1,
              1
            ]
          }
        ]
      },
      {
        "name": "Dark Lands",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/dark_lands/lv_chs_darks_ps_0_{y}x{x}.webp",
            "full": "/tiles/dark_lands/lv_chs_darks_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Phantom Lands",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/phantom_lands/lv_chs_phntms_ps_0_{y}x{x}.webp",
            "full": "/tiles/phantom_lands/lv_chs_phntms_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          },
          {
            "id": 7,
            "url": "/tiles/phantom_lands/lv_chs_phntms_ps_7_{y}x{x}.webp",
            "full": "/tiles/phantom_lands/lv_chs_phntms_ps_7_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      },
      {
        "name": "Plague Lands",
        "tiles": [
          {
            "id": 1,
            "url": "/tiles/plague_lands/lv_chs_diseases_ps_1_{y}x{x}.webp",
            "full": "/tiles/plague_lands/lv_chs_diseases_ps_1_full.webp",
            "max": [
              4,
              4
            ]
          }
        ]
      },
      {
        "name": "Mayhem Lands",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/mayhem_lands/lv_chs_madnesss_ps_0_{y}x{x}.webp",
            "full": "/tiles/mayhem_lands/lv_chs_madnesss_ps_0_full.webp",
            "max": [
              3,
              3
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "South Vern",
    "areas": [
      {
        "name": "Secret Dungeon",
        "tiles": [
          {
            "id": 0,
            "url": "/tiles/secret_dungeon/lv_scd_bernsth_ps_0_{y}x{x}.webp",
            "full": "/tiles/secret_dungeon/lv_scd_bernsth_ps_0_full.webp",
            "max": [
              16,
              25
            ]
          }
        ]
      }
    ]
  }
]