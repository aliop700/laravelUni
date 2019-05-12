<?php

use Illuminate\Database\Seeder;

class CountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('countries')->insert([
            'id'            => 1,
            'name'          => 'Jordan',
           
        ]);
        DB::table('countries')->insert([
            'id'            => 2,
            'name'          => 'Saudi arabia',
           
        ]);
        DB::table('countries')->insert([
            'id'            => 3,
            'name'          => 'United States of America',
           
        ]);
    }
}
