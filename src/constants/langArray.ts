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
  cpp: `// C++ Started Code
  #include <bits/stdc++.h>
  using namespace std;
  
  int main() {
  cout << "Hello There Raj here nice to meet you" << endl;
  return 0;
  }
  `,
  javascript: `// JavaScript Started Code
function main() {
  console.log("Hello There Raj here nice to meet you");
}

main();
`,

  typescript: `// TypeScript Started Code
function main(): void {
  console.log("Hello There Raj here nice to meet you");
}

main();
`,

  python: `# Python Started Code
def main():
    print("Hello There Raj here nice to meet you")

main()
`,

  java: `// Java Started Code
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello There Raj here nice to meet you");
    }
}
`,

  csharp: `// C# Started Code
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello There Raj here nice to meet you");
    }
}
`,

  php: `<?php
// PHP Started Code
echo "Hello There Raj here nice to meet you";
?>
`,


  go: `// Go Started Code
package main

import "fmt"

func main() {
    fmt.Println("Hello There Raj here nice to meet you")
}
`,

  ruby: `# Ruby Started Code
puts "Hello There Raj here nice to meet you"
`,

  rust: `// Rust Started Code
fn main() {
    println!("Hello There Raj here nice to meet you");
}
`,
};