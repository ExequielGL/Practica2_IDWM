<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TechnologySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('technologies')->insert([
            'name' => 'Laravel',
            'knowledge' => 'Intermedio',
            'user_id' => 1, 
        ]);
        DB::table('technologies')->insert([
            'name' => 'Angular',
            'knowledge' => 'Básico',
            'user_id' => 1, 
        ]);
        DB::table('technologies')->insert([
            'name' => 'React',
            'knowledge' => 'Básico',
            'user_id' => 1, 
        ]);
        DB::table('technologies')->insert([
            'name' => 'Next.js',
            'knowledge' => 'Básico',
            'user_id' => 1, 
        ]);
    }
}
