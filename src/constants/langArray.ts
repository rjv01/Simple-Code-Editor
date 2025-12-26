export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
  cpp: "10.2.0",
  go: "1.16.2",
  ruby: "3.0.1",
  rust: "1.68.2",
} as const;

export type Language = keyof typeof LANGUAGE_VERSIONS;

export const CODE_SNIPPETS: Record<Language, string>  = {
  cpp: `// C++ Hello World
  #include <bits/stdc++.h>
  using namespace std;
  
  int main() {
  cout << "Hello, World!" << endl;
  return 0;
  }
  `,
  javascript: `// JavaScript Hello World
function main() {
  console.log("Hello, World!");
}

main();
`,

  typescript: `// TypeScript Hello World
function main(): void {
  console.log("Hello, World!");
}

main();
`,

  python: `# Python Hello World
def main():
    print("Hello, World!")

main()
`,

  java: `// Java Hello World
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`,

  csharp: `// C# Hello World
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}
`,

  php: `<?php
// PHP Hello World
echo "Hello, World!";
?>
`,


  go: `// Go Hello World
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
`,

  ruby: `# Ruby Hello World
puts "Hello, World!"
`,

  rust: `// Rust Hello World
fn main() {
    println!("Hello, World!");
}
`,
};