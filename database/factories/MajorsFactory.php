<?php

use Faker\Generator as Faker;

$factory->define(App\Major::class, function (Faker $faker) {
    $universities = App\University::pluck('id')->toArray();

    return [
        'name'  => $faker->unique($reset = true)->randomElement([
            'MIS',
            'Engineering',
            'Arts',
            'Buisness Adminstration'
        ]),
        'hour_cost' => $faker->numberBetween(1,100),
        'minimum_average' => $faker->numberBetween(700,1000)/10.0,
        'university_id' => $faker->randomElement($universities)
    ];
});
