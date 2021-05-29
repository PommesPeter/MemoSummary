---
title: 第十二届蓝桥杯省赛第二场-2021.5.9
date: 2021-05-17 20:33:02
permalink: /algorithm/lanqiao/second_2021_5_9
categories:
  - 算法
  - 蓝桥杯
tags: 
  - 算法
---

# 第十二届蓝桥杯省赛第二场(2021.5.9)

[题目在这](/file/第十二届蓝桥杯大赛软件赛省赛第二场_JB.pdf)

## A: 求余

### 问题描述


在 C/C++/Java/Python 等语言中，使用 % 表示求余，请问 2021%20 的值是多少？

### 解题思路

直接输出

### 代码

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << 2021 % 20 << endl;
    return 0;
}
```

### 答案
1

## B: 双阶乘

### 问题描述

一个正整数的双阶乘，表示不超过这个正整数且与它有相同奇偶性的所有正整数乘积。n 的双阶乘用 n!! 表示。

例如：

3!! = 3 × 1 = 3。

8!! = 8 × 6 × 4 × 2 = 384。

11!! = 11 × 9 × 7 × 5 × 3 × 1 = 10395。

请问，2021!! 的最后 5 位（这里指十进制位）是多少？

注意：2021!! = 2021 × 2019 × · · · × 5 × 3 × 1。

提示：建议使用计算机编程解决问题。

### 解题思路

直接暴力即可

### 代码

```cpp
#include <iostream>
using namespace std;

typedef unsigned long long ull;

int main() {
    ull ans = 1;
    int n = 2021;

    for (int i = 1; i <= n; i+=2) {
        ans = (ans * i) % 1000000;
    }
    cout << ans << endl;
    return 0;
}
```

or

```python
ans = 1
for i in range(1, 2021):
    if i % 2 != 0:
        ans *= i
print(ans)
```

### 答案

59375

## C: 格点

### 问题描述

如果一个点(x, y)的两维坐标都是整数，即x∈Z且y∈Z，则称这个点为一个格点。如果一个点(x, y)的两维坐标都是正数，即

x>0且y>0，则称这个点在第一象限。请问在第一象限的格点中，有多少个点(x, y)的两维坐标乘积不超过 2021， 即x · y ≤ 2021。

提示：建议使用计算机编程解决问题。

### 解题思路

直接暴力即可

### 代码

```cpp
#include <iostream>
using namespace std;

int main() {
    int n = 2021;
    int count = 0;
    for (int i =1 ; i <= n ; i++) {
        for (int j = 1; j <= n; j++) {
            if (i * j <= 2021) count++;
        }
    }
    cout << count << endl;
    return 0;
}
```

### 答案

15698

## D: 整数分解

### 问题描述

将 3 分解成两个正整数的和，有两种分解方法，分别是 3 = 1 + 2 和3 = 2 + 1。注意顺序不同算不同的方法。将 5 分解成三个正整数的和，有 6 种分解方法，它们是 1+1+3 = 1+2+2 = 1+3+1 = 2+1+2 = 2+2+1 = 3+1+1。请问，将 2021 分解成五个正整数的和，有多少种分解方法？

### 解题思路

如果只是分解成两个正整数之和，3就有两种分解方式，也就是1+2和2+1。如果是4的话就有三种分解方式，也就是1+3和2+2和3+1。如果是5的话酒有1+4,2+3,3+2,4+1，四种分解方式。以此类推，该规律为当一个数分解成两个数的和的时候有n-1种分解方法，n表示对应的结果数字，n分解为两个数之和的分解方法数为n-1.故只需要确定前面三个数，对于后面两个数而言，只需要2021减去前面三个数之和得到的数再分解成两个正整数之和即可。

该题本质还是暴力，但是要对暴力求解进行优化，五重循环基本跑不完.

### 代码

```cpp
#include <iostream>
using namespace std;

int main() {

    int n = 2021;
    unsigned long long count = 0;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            for (int k = 1; k <= n; k++) {
                int m = n - i - j - k;
                if (m + i + j + k == n) {
                    count += m - 1;
                }
            }
        }
    }
    cout << count << endl;
    return 0;
}
```

### 答案

691677274345

## E: 城邦

### 问题描述

小蓝国是一个水上王国，有 2021 个城邦，依次编号 1 到 2021。在任意两个城邦之间，都有一座桥直接连接。为了庆祝小蓝国的传统节日，小蓝国政府准备将一部分桥装饰起来。对于编号为 a 和 b 的两个城邦，它们之间的桥如果要装饰起来，需要的费用如下计算：找到 a 和 b 在十进制下所有不同的数位，将数位上的数字求和。例如，编号为 2021 和 922 两个城邦之间，千位、百位和个位都不同，将这些数位上的数字加起来是 (2 + 0 + 1) + (0 + 9 + 2) = 14。注意 922 没有千位，千位看成 0。为了节约开支，小蓝国政府准备只装饰 2020 座桥，并且要保证从任意一个城邦到任意另一个城邦之间可以完全只通过装饰的桥到达。请问，小蓝国政府至少要花多少费用才能完成装饰。

### 解题思路

通过题目可知，只装饰2020条可知为最小生成树问题.

### 代码

```cpp
#include <iostream>
using namespace std;

const int N = 2025 * 2025;
int n = 2021, m = 2020 * 2020;
int p[N];

struct Edge {
    int a, int b, int w;
    bool operator< (const Edge &E) const {
        return w < E.w;
    }
}e[N];



int cal_weight(int a, int b) {

}

int main() {

    for (int i = 0 ; i < m; i++) {
        
    }

    
    return 0;
}
```

### 答案

4046

## F: 特殊年份

### 问题描述

今年是 2021 年，2021 这个数字非常特殊，它的千位和十位相等，个位比百位大 1，我们称满足这样条件的年份为特殊年份。输入 5 个年份，请计算这里面有多少个特殊年份。

### 输入格式

输入 5 行，每行一个 4 位十进制数（数值范围为 1000 至 9999），表示一个年份

### 输出格式

输出一个整数，表示输入的 5 个年份中有多少个特殊年份。

### 样例输入
2019

2021

1920

2120

9899

### 样例输出
2

### 样例说明
2021 和 9899 是特殊年份，其它不是特殊年份。

### 解题思路
读入后，直接判断一下即可

### 代码

```cpp
#include <iostream>
using namespace std;

int main() {

    string year;
    int n = 5, count = 0;
    for (int i =0; i < n; i++) {
        cin >> year;
        if (year[0] == year[2] && year[1] + 1 == year[3]) count++;
    }
    cout << count << endl;
    return 0;
}
```

## F: 特殊年份

### 问题描述

小蓝发现，对于一个正整数 n 和一个小于 n 的正整数 v，将 v 平方后对 n取余可能小于 n 的一半，也可能大于等于 n 的一半。请问，在 1 到 n − 1 中，有多少个数平方后除以 n 的余数小于 n 的一半。例如，当 n = 4 时，1, 2, 3 的平方除以 4 的余数都小于 4 的一半。又如，当 n = 5 时，1, 4 的平方除以 5 的余数都是 1，小于 5 的一半。而2, 3 的平方除以 5 的余数都是 4，大于等于 5 的一半。

### 输入格式

输入一行包含一个整数 n。

### 输出格式

输出一个整数，表示满足条件的数的数量。

### 样例输入

5

### 样例输出
2

### 评测用例规模与约定

对于所有评测用例，1 ≤ n ≤ 10000。

### 解题思路

暴力判断即可，但是注意精度问题，我这里是乘二消除了精度的问题

### 代码

```cpp
#include<cstdio>
#include<cstring>
#include<algorithm>
#include<vector>
#include<map>
#include<iostream>
#define ll long long
using namespace std;

int main()
{
	ll n;
	ll ans = 0;
	cin>>n;
	for(ll i = 1;i < n; ++i) {
		ll k = (i * i) % n;
		k *= 2;
		if(k <= n) {
			ans++;
		}
	}
	cout<<ans<<endl;
	return 0;
}
```

## H: 完全平方数

时间限制: 1.0s 内存限制: 256.0MB 本题总分：20 分

### 问题描述

一个整数 a 是一个完全平方数，是指它是某一个整数的平方，即存在一个整数 b，使得 a=b2。给定一个正整数 n，请找到最小的正整数 x，使得它们的乘积是一个完全平方数。

### 输入格式

输入一行包含一个整数 n。

### 输出格式

输出找到的最小的正整数 x。

### 样例输入

12

### 样例输出

3

### 评测用例规模与约定

对于 30% 的评测用例，1 ≤ n ≤ 1000，答案不超过 1000。

对于 60% 的评测用例，1 ≤ n ≤ 108，答案不超过 108。

对于所有评测用例，1 ≤ n ≤ 1012，答案不超过 1012。

### 解题思路

首先很明显，当n为质数的时候，我们直接输出n即可，否则我们将n进行质因子分离，分别将质因子为奇数个的乘起来即可得到最小的x，所以我们用一个map记录该质因子对应的个数，我们先用欧拉筛筛出质数，然后再对n进行分解

### 代码

```cpp
#include<cstdio>
#include<cstring>
#include<cmath>
#include<algorithm>
#include<vector>
#include<map>
#include<iostream>
#define ll long long
using namespace std;

const int N = 1000000+10;

ll n;

ll primes[N];
bool vis[N];
map<int,int> flag;

bool is_prime(ll x) {
	for(ll i = 2;i * i <= x; ++i) {
		if(x % i == 0) return false;
	}
	return true;
}

void get_primes() {
	vis[0] = vis[1] = true;
	for(ll i = 2;i < N; ++i) {
		if(!vis[i]) {
			primes[++primes[0]] = i;
		}
		for(ll j = 1;j <= primes[0] && i * primes[j] < N; ++j) {
			vis[i * primes[j]] = true;
			if(i % primes[j] == 0) break;
		}
	}
}

int main()
{
	scanf("%lld",&n);
	ll k = n;
	if(is_prime(n)) {
		printf("%lld\n",n);
	}
	else {
		get_primes();
		for(ll i = 1;i <= primes[0]; ++i) {
			while(k % primes[i] == 0 && k != 1) {
				k /= primes[i];
				flag[primes[i]]++;
			}
			if(k == 1) break;
		}
		if(k - 1) flag[k] = 1;
		ll ans = 1;
		for(auto it : flag) {
			if(it.second % 2) ans *= it.first;
		}
		printf("%lld\n",ans);
	}
	return 0;
}
```

## I: 负载均衡

时间限制: 1.0s 内存限制: 256.0MB 本题总分：25 分

### 问题描述

有 n 台计算机，第 i 台计算机的运算能力为 vi。有一系列的任务被指派到各个计算机上，第 i 个任务在 ai时刻分配，指定计算机编号为 bi ，耗时为 ci 且算力消耗为 di 。如果此任务成功分配，将立刻开始运行，期间持续占用 bi 号计算机 di 的算力，持续 ci 秒。对于每次任务分配，如果计算机剩余的运算能力不足则输出 −1，并取消这次分配，否则输出分配完这个任务后这台计算机的剩余运算能力。

### 输入格式

输入的第一行包含两个整数 n, m，分别表示计算机数目和要分配的任务数。第二行包含 n 个整数 v1, v2, · · · vn，分别表示每个计算机的运算能力。接下来 m 行每行 4 个整数 ai, bi, ci, di，意义如上所述。数据保证

ai 严格递增，即 ai < ai+1。

### 输出格式

输出 m 行，每行包含一个数，对应每次任务分配的结果。

### 样例输入

2 6

5 5

1 1 5 3

2 2 2 6

3 1 2 3

4 1 6 1

5 1 3 3

6 1 3 4

### 样例输出

2

-1

-1

1

-1

0

### 样例说明

时刻 1，第 1 个任务被分配到第 1 台计算机，耗时为 5 ，这个任务时刻 6会结束，占用计算机 1 的算力 3。

时刻 2，第 2 个任务需要的算力不足，所以分配失败了。

时刻 3，第 1 个计算机仍然正在计算第 1 个任务，剩余算力不足 3，所以失败。

时刻 4，第 1 个计算机仍然正在计算第 1 个任务，但剩余算力足够，分配后剩余算力 1。

时刻 5，第 1 个计算机仍然正在计算第 1, 4 个任务，剩余算力不足 4，失败。

时刻 6，第 1 个计算机仍然正在计算第 4 个任务，剩余算力足够，且恰好用完。

### 评测用例规模与约定

对于 20% 的评测用例，n, m ≤ 200。

对于 40% 的评测用例，n, m ≤ 2000。

对于所有评测用例，1 ≤ n, m ≤ 200000，1≤ai,ci,di,vi≤109，1≤bi≤n。

### 解题思路

这道题我是直接模拟的，应该只有40%的分数，用一个map<in,map<int,int>> fan，fan[i] [j]表示的是第i个时刻的给第j个计算机返回的算力，注意这里的ai可能不连续

### Code

```cpp
#include<cstdio>
#include<cstring>
#include<algorithm>
#include<vector>
#include<map>
#include<iostream>
#include<stack>
#define ll long long
#define mod 100000
using namespace std;

const int N = 200000+10;

int n,m;

int a[N],t[N];

map<int,map<int,int>> fan;


int main()
{
	scanf("%d%d",&n,&m);
	for(int i = 1;i <= n; ++i) {
		scanf("%d",&a[i]);
	}
	int a1,b1,c1,d1;
	for(int i = 1;i <= m; ++i) {
		scanf("%d%d%d%d",&a1,&b1,&c1,&d1);
		t[i] = a1;
		for(int j = t[i-1] + 1; j <= t[i]; ++j) {
			for(auto it : fan[i]) {
				a[it.first] += it.second;
				it.second = 0; 
			}
		}
		
		if(a[b1] < d1) {
			puts("-1");
			continue;
		}
		fan[a1 + c1][b1] += d1;
		a[b1] -= d1;
		printf("%d\n",a[b1]);
	}
	
	
	return 0;
}
/*
2 6 
5 5 
1 1 5 3
2 2 2 6
3 1 2 3
4 1 6 1
5 1 3 3
6 1 3 4
*/
```

## J: 国际象棋

时间限制: 1.0s 内存限制: 256.0MB 本题总分：25 分

### 问题描述

众所周知，“八皇后” 问题是求解在国际象棋棋盘上摆放 8 个皇后，使得两两之间互不攻击的方案数。已经学习了很多算法的小蓝觉得 “八皇后” 问题太简单了，意犹未尽。作为一个国际象棋迷，他想研究在 N × M 的棋盘上，摆放 K个马，使得两两之间互不攻击有多少种摆放方案。由于方案数可能很大，只需计算答案除以 1000000007 (即 109 + 7) 的余数。如下图所示，国际象棋中的马摆放在棋盘的方格内，走 “日” 字，位于 (x, y)格的马（第 x 行第 y 列）可以攻击 (x + 1, y + 2)、(x + 1, y − 2)、(x − 1, y + 2)、 (x − 1, y − 2)、(x + 2, y + 1)、(x + 2, y − 1)、(x − 2, y + 1) 和 (x − 2, y − 1) 共 8 个格子。

### 输入格式


输入一行包含三个正整数 N, M, K，分别表示棋盘的行数、列数和马的个数

### 输出格式

输出一个整数，表示摆放的方案数除以 1000000007 (即 109 + 7) 的余数。

### 样例输入1

1 2 1

### 样例输出1

2

### 样例输入2

4 4 3

### 样例输出2

276

### 评测用例规模与约定

对于 5% 的评测用例，K = 1；

对于另外 10% 的评测用例，K = 2；

对于另外 10% 的评测用例，N = 1；

对于另外 20% 的评测用例，N, M ≤ 6，K ≤ 5；

对于另外 25% 的评测用例，N ≤ 3，M ≤ 20，K ≤ 12；

对于所有评测用例，1 ≤ N ≤ 6，1 ≤ M ≤ 100，1 ≤ K ≤ 20。

### 解题思路

这道题不会，只会骗点分(

### 代码

```cpp
#include<cstdio>
#include<cstring>
#include<algorithm>
#include<vector>
#include<map>
#include<iostream>
#include<stack>
#define ll long long
#define mod 1000000007
using namespace std;

ll n,m,k;

ll ans = 0;

int dx[8] = {-1,-2,-2,-1,1,2,2,1};
int dy[8] = {-2,-1,1,2,2,1,-1,-2};

int mp[105][105];


ll qpow(ll a,ll b) {
	ll ans = 1;
	while(b) {
		if(b & 1) ans = (ans * a) % mod;
		a = (a * a) % mod;
		b >>= 1;
	}
	return ans;
}
ll inv(ll v) {
	return qpow(v,mod-2);
}

ll C(ll a,ll b) {
	ll ans = 1;
	for(ll i = 1;i <= b; ++i) {
		ans = (ans * (a-i+1)) % mod;
		ans /= i;
//		ans = (ans * inv(i)) % mod;
	}
	return ans;
}

void dfs(int x,int y) {
	for(int i = 0;i < 8; ++i) {
		int nx = x + dx[i];
		int ny = y + dy[i];
		if(nx > 0 && ny > 0 && nx <= n && ny <= m && mp[nx][ny] == 0) {
			mp[nx][ny] = 1;
			ans++;
			dfs(nx,ny);
		}
	}
}


int main()
{
	scanf("%lld%lld%lld",&n,&m,&k);
	if(k == 1) {
		printf("%lld\n",n*m);
	}
	else {
		if(n == 1) {
			printf("%lld\n",C(m,k));
		}
		else if(k == 2){			
			ll loc;
			for(int i = 1;i <= n; ++i) {
				for(int j = 1;j <= m; ++j) {
					memset(mp,0,sizeof mp);
					loc = 0;
					dfs(i,j);
					ll tol = n * m - loc - 1;
					ans = (ans + tol) % mod;
				}
			}
			printf("%lld\n",ans);
		}
		else {
			printf("%d",rand() % mod);
		}
	}
    return 0;
}
/*
4 4 3

276
*/

```